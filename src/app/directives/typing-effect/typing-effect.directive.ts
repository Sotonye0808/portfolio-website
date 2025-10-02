import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, AfterViewInit, Inject, PLATFORM_ID, OnChanges, SimpleChanges } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface TypingEffectConfig {
  typingSpeed?: number; // Duration in seconds
  blinkSpeed?: number; // Blink duration in seconds
  cursorColor?: string;
  cursorWidth?: string;
  fontSize?: string;
  fontFamily?: string;
  autoStart?: boolean;
  loop?: boolean;
  loopDelay?: number; // Delay between loops in seconds
}

@Directive({
  selector: '[appTypingEffect]',
  standalone: true
})
export class TypingEffectDirective implements OnInit, AfterViewInit, OnDestroy, OnChanges {
 
  @Input() config: TypingEffectConfig = {}

  defaultConfig: TypingEffectConfig = {
    typingSpeed: 2, 
    blinkSpeed: 0.5,
    cursorColor: 'currentColor',
    cursorWidth: '3px',
    fontSize: '', // Will be set from element's computed style
    fontFamily: '', // Will be set from element's computed style
    autoStart: true,
    loop: false,
    loopDelay: 5, 
  }

  activeConfig: TypingEffectConfig = {};

  private originalText: string = '';
  private textLength: number = 0;
  private styleElement: HTMLStyleElement | null = null;
  private animationName: string = '';
  private blinkAnimationName: string = '';
  private isInitialized: boolean = false;
  private originalFontSize: string = '';
  private originalFontFamily: string = '';
  private restartDelay: number = 1; // Fixed 1s delay between untype and type again

  isBrowser!: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    // Generate unique animation names to avoid conflicts
    const uniqueId = Math.random().toString(36).substr(2, 9);
    this.animationName = `typing-${uniqueId}`;
    this.blinkAnimationName = `blink-${uniqueId}`;
  }

  ngOnInit() {    
    if (!this.isBrowser) return;
    this.captureOriginalStyles();
    this.setupConfig();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.isBrowser) return;
    
    if (changes['config']) {
      this.setupConfig();
      this.updateTextContent();
      
      if (this.isInitialized && this.activeConfig.autoStart) {
        this.startTypingEffect();
      }
    }
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    
    this.updateTextContent();
    this.isInitialized = true;
    
    if (this.activeConfig.autoStart && this.textLength > 0) {
      // Small delay to ensure DOM is fully ready
      setTimeout(() => {
        this.startTypingEffect();
      }, 0);
    }
  }

  ngOnDestroy() {
    if (this.styleElement && this.isBrowser) {
      this.renderer.removeChild(document.head, this.styleElement);
    }
  }

  private captureOriginalStyles() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    const computedStyle = window.getComputedStyle(element);
    
    this.originalFontSize = computedStyle.fontSize;
    this.originalFontFamily = computedStyle.fontFamily;
  }

  private setupConfig() {
    this.activeConfig = {
      typingSpeed: this.config.typingSpeed ?? this.defaultConfig.typingSpeed, 
      blinkSpeed: this.config.blinkSpeed ?? this.defaultConfig.blinkSpeed,
      cursorColor: this.config.cursorColor ?? this.defaultConfig.cursorColor,
      cursorWidth: this.config.cursorWidth ?? this.defaultConfig.cursorWidth,
      fontSize: this.config.fontSize ?? this.originalFontSize,
      fontFamily: this.config.fontFamily ?? this.originalFontFamily,
      autoStart: this.config.autoStart ?? this.defaultConfig.autoStart,
      loop: this.config.loop ?? this.defaultConfig.loop,
      loopDelay: this.config.loopDelay ?? this.defaultConfig.loopDelay,
    }
  }

  private updateTextContent() {
    const currentText = this.el.nativeElement.textContent?.trim() || '';
    
    if (currentText !== this.originalText) {
      this.originalText = currentText;
      this.textLength = this.originalText.length;
    }
  }

  public startTypingEffect() {
    if (!this.isBrowser || this.textLength === 0) {
      console.warn('Cannot start typing effect: no text content or not in browser');
      return;
    }
    
    this.setupElementStyles();
    this.injectAnimationStyles();
    this.applyAnimation();
  }

  public resetEffect() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'animation', 'none');
    this.renderer.setStyle(element, 'width', '0');
    
    // Force reflow
    element.offsetHeight;
    
    setTimeout(() => {
      this.applyAnimation();
    }, 10);
  }

  private setupElementStyles() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    
    // Only apply essential typing effect styles, don't override alignment
    this.renderer.setStyle(element, 'white-space', 'nowrap');
    this.renderer.setStyle(element, 'overflow', 'hidden');
    this.renderer.setStyle(element, 'border-right', `${this.activeConfig.cursorWidth} solid ${this.activeConfig.cursorColor}`);
    
    // Set initial width to 0 to start the animation properly
    this.renderer.setStyle(element, 'width', '0');
    
    // Only apply font styles if they were provided in config (custom overrides)
    if (this.config.fontFamily) {
      this.renderer.setStyle(element, 'font-family', this.activeConfig.fontFamily);
    }
    if (this.config.fontSize) {
      this.renderer.setStyle(element, 'font-size', this.activeConfig.fontSize);
    }
  }

  private injectAnimationStyles() {
    if (!this.isBrowser) return;

    // Remove existing style element if it exists
    if (this.styleElement) {
      this.renderer.removeChild(document.head, this.styleElement);
    }

    this.styleElement = this.renderer.createElement('style');
    
    // Calculate proper target width using a temporary span
    const tempSpan = this.renderer.createElement('span');
    this.renderer.setStyle(tempSpan, 'visibility', 'hidden');
    this.renderer.setStyle(tempSpan, 'position', 'absolute');
    this.renderer.setStyle(tempSpan, 'font-family', this.activeConfig.fontFamily);
    this.renderer.setStyle(tempSpan, 'font-size', this.activeConfig.fontSize);
    this.renderer.setStyle(tempSpan, 'white-space', 'nowrap');
    this.renderer.appendChild(tempSpan, this.renderer.createText(this.originalText));
    this.renderer.appendChild(document.body, tempSpan);
    
    const actualWidth = tempSpan.offsetWidth + 6; // +small buffer to avoid cutting off last character
    this.renderer.removeChild(document.body, tempSpan);

    let styles = '';

    if (this.activeConfig.loop) {
      // Create complete cycle: type → delay → untype → restart delay → type again
      const typingDuration = this.activeConfig.typingSpeed!;
      const loopDelay = this.activeConfig.loopDelay!;
      const untypingDuration = this.activeConfig.typingSpeed!;
      const restartDelay = this.restartDelay; // 1s fixed delay
      const totalCycleDuration = typingDuration + loopDelay + untypingDuration + restartDelay;

      // Calculate percentages for each phase
      const typeEndPercent = (typingDuration / totalCycleDuration) * 100;
      const delayEndPercent = ((typingDuration + loopDelay) / totalCycleDuration) * 100;
      const untypeEndPercent = ((typingDuration + loopDelay + untypingDuration) / totalCycleDuration) * 100;

      styles = `
        @keyframes ${this.animationName} {
          0% {
            width: 0;
          }
          ${typeEndPercent}% {
            width: ${actualWidth}px;
          }
          ${delayEndPercent}% {
            width: ${actualWidth}px;
          }
          ${untypeEndPercent}% {
            width: 0;
          }
          100% {
            width: 0;
          }
        }
        
        @keyframes ${this.blinkAnimationName} {
          0%, 50% {
            border-color: ${this.activeConfig.cursorColor};
          }
          51%, 100% {
            border-color: transparent;
          }
        }
      `;
    } else {
      // Single animation
      styles = `
        @keyframes ${this.animationName} {
          0% {
            width: 0;
          }
          100% {
            width: ${actualWidth}px;
          }
        }
        
        @keyframes ${this.blinkAnimationName} {
          0%, 50% {
            border-color: ${this.activeConfig.cursorColor};
          }
          51%, 100% {
            border-color: transparent;
          }
        }
      `;
    }
    
    this.renderer.appendChild(this.styleElement, this.renderer.createText(styles));
    this.renderer.appendChild(document.head, this.styleElement);
  }

  private applyAnimation() {
    if (!this.isBrowser || this.textLength === 0) return;

    const element = this.el.nativeElement;
    
    if (this.activeConfig.loop) {
      // Calculate total cycle duration: type + delay + untype + restart delay
      const typingDuration = this.activeConfig.typingSpeed!;
      const loopDelay = this.activeConfig.loopDelay!;
      const untypingDuration = this.activeConfig.typingSpeed!;
      const restartDelay = this.restartDelay; // 1s fixed delay
      const totalCycleDuration = typingDuration + loopDelay + untypingDuration + restartDelay;

      // Apply looping animation with proper steps for typing and untyping phases
      const animationValue = `${this.animationName} ${totalCycleDuration}s steps(${this.textLength}) infinite, ${this.blinkAnimationName} ${this.activeConfig.blinkSpeed}s step-end infinite`;
      this.renderer.setStyle(element, 'animation', animationValue);
    } else {
      // Single animation
      const animationValue = `${this.animationName} ${this.activeConfig.typingSpeed}s steps(${this.textLength}) forwards, ${this.blinkAnimationName} ${this.activeConfig.blinkSpeed}s step-end infinite`;
      this.renderer.setStyle(element, 'animation', animationValue);
    }
  }
}

/*
<!-- Basic usage -->
<div appTypingEffect>This is a typing demo.</div>

<!-- With custom properties -->
<h1 
  appTypingEffect
  [config]="{
    typingSpeed: 3,
    blinkSpeed: 0.8,
    cursorColor: '#ff0000',
    fontSize: '3em',
    fontFamily: 'Courier New, monospace'
  }">
  Custom typing effect!
</h1>

<!-- Looping animation -->
<p 
  appTypingEffect
  [config]="{
    loop: true,
    loopDelay: 2,
    typingSpeed: 1.5
  }">
  This text will loop continuously.
</p>

<!-- Manual control -->
<div 
  appTypingEffect
  [config]="{autoStart: false}"
  #typingElement>
  Click the button to start typing.
</div>
<button (click)="typingElement.startTypingEffect()">Start Typing</button>
<button (click)="typingElement.resetEffect()">Reset</button>

 */
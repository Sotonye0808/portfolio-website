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
    
    /* console.log('Captured original styles:', {
      fontSize: this.originalFontSize,
      fontFamily: this.originalFontFamily
    }); */
  }

  private setupConfig() {
    this.activeConfig = {
      typingSpeed: this.config.typingSpeed ?? this.defaultConfig.typingSpeed, 
      blinkSpeed: this.config.blinkSpeed ?? this.defaultConfig.blinkSpeed,
      cursorColor: this.config.cursorColor ?? this.defaultConfig.cursorColor,
      cursorWidth: this.config.cursorWidth ?? this.defaultConfig.cursorWidth,
      fontSize: this.config.fontSize ?? this.originalFontSize, // Use original or custom
      fontFamily: this.config.fontFamily ?? this.originalFontFamily, // Use original or custom
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
     // console.log('Text updated:', this.originalText, 'Length:', this.textLength); // Debug log
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
    
    // Apply base styles for typing effect
    this.renderer.setStyle(element, 'width', `${this.textLength}ch`);
    this.renderer.setStyle(element, 'white-space', 'nowrap');
    this.renderer.setStyle(element, 'overflow', 'hidden');
    this.renderer.setStyle(element, 'border-right', `${this.activeConfig.cursorWidth} solid ${this.activeConfig.cursorColor}`);
    
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
    
    const styles = `
      @keyframes ${this.animationName} {
        from {
          width: 0;
        }
        to {
          width: ${this.textLength}ch;
        }
      }
      
      @keyframes ${this.blinkAnimationName} {
        50% {
          border-color: transparent;
        }
      }
    `;
    
    this.renderer.appendChild(this.styleElement, this.renderer.createText(styles));
    this.renderer.appendChild(document.head, this.styleElement);
  }

  private applyAnimation() {
    if (!this.isBrowser || this.textLength === 0) return;

    const element = this.el.nativeElement;
    const loopAnimation = this.activeConfig.loop ? 'infinite' : '';
    const animationDelay = this.activeConfig.loop ? `, ${this.activeConfig.loopDelay}s` : '';
    
    const animationValue = this.activeConfig.loop 
      ? `${this.animationName} ${this.activeConfig.typingSpeed}s steps(${this.textLength}) ${animationDelay} ${loopAnimation}, ${this.blinkAnimationName} ${this.activeConfig.blinkSpeed}s step-end infinite alternate`
      : `${this.animationName} ${this.activeConfig.typingSpeed}s steps(${this.textLength}), ${this.blinkAnimationName} ${this.activeConfig.blinkSpeed}s step-end infinite alternate`;
    
    this.renderer.setStyle(element, 'animation', animationValue);
  }
}

/*
<!-- Basic usage -->
<div appTypingEffect>This is a typing demo.</div>

<!-- With custom properties -->
<h1 
  appTypingEffect
  [config]="{
    typingSpeed=3
    blinkSpeed=0.8
    cursorColor='#ff0000'
    fontSize='3em'
    fontFamily='Courier New, monospace'
  }">
  Custom typing effect!
</h1>

<!-- Looping animation -->
<p 
  appTypingEffect
  [config]="{
    loop=true
    loopDelay=2
    typingSpeed=1.5
  }">
  This text will loop continuously.
</p>

<!-- Manual control -->
<div 
  appTypingEffect
  [config]="{autoStart=false}"
  #typingElement>
  Click the button to start typing.
</div>
<button (click)="typingElement.startTypingEffect()">Start Typing</button>
<button (click)="typingElement.resetEffect()">Reset</button>

 */
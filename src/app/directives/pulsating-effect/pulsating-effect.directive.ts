import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface PulsatingEffectConfig {
  pulseColor?: string;
  animationDuration?: string;
  pulseSize?: string; // Size of the pulse expansion (e.g., '15px')
  minScale?: number; // Minimum scale (default 0.95)
  maxScale?: number; // Maximum scale (default 1)
  opacity?: number; // Starting opacity of the pulse (default 0.7)
  delay?: number; // Delay in seconds before animation starts
  loop?: boolean;
  loopDelay?: number; // Delay between loops in seconds
  autoStart?: boolean;
}

@Directive({
  selector: '[appPulsatingEffect]',
  standalone: true
})
export class PulsatingEffectDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input() config: PulsatingEffectConfig = {};

  defaultConfig: PulsatingEffectConfig = {
    pulseColor: '', // Will be set from element's computed color
    animationDuration: '2s',
    pulseSize: '15px',
    minScale: 0.95,
    maxScale: 1,
    opacity: 0.7,
    delay: 0,
    loop: true,
    loopDelay: 0,
    autoStart: true
  };

  activeConfig: PulsatingEffectConfig = {};

  private styleElement: HTMLStyleElement | null = null;
  private animationName: string = '';
  private originalColor: string = '';
  private isInitialized: boolean = false;
  isBrowser!: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    // Generate unique animation name to avoid conflicts
    const uniqueId = Math.random().toString(36).substr(2, 9);
    this.animationName = `pulse-${uniqueId}`;
  }

  ngOnInit() {
    if (!this.isBrowser) return;
    this.captureOriginalColor();
    this.setupConfig();
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    
    this.isInitialized = true;
    
    if (this.activeConfig.autoStart) {
      if (this.activeConfig.delay && this.activeConfig.delay > 0) {
        setTimeout(() => {
          this.startPulseEffect();
        }, this.activeConfig.delay * 1000);
      } else {
        setTimeout(() => {
          this.startPulseEffect();
        }, 0);
      }
    }
  }

  ngOnDestroy() {
    if (this.styleElement && this.isBrowser) {
      this.renderer.removeChild(document.head, this.styleElement);
    }
  }

  private captureOriginalColor() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    const computedStyle = window.getComputedStyle(element);
    
    // Try to get color from background-color first, then from color property
    this.originalColor = computedStyle.backgroundColor;
    
    // If background-color is transparent or not set, use the text color
    if (this.originalColor === 'rgba(0, 0, 0, 0)' || this.originalColor === 'transparent' || !this.originalColor) {
      this.originalColor = computedStyle.color;
    }
    
    // If still no color, fall back to a default
    if (!this.originalColor || this.originalColor === 'rgba(0, 0, 0, 0)' || this.originalColor === 'transparent') {
      this.originalColor = 'rgb(222, 84, 72)'; // Default pulse color
    }
  }

  private setupConfig() {
    this.activeConfig = {
      pulseColor: this.config.pulseColor ?? this.originalColor,
      animationDuration: this.config.animationDuration ?? this.defaultConfig.animationDuration,
      pulseSize: this.config.pulseSize ?? this.defaultConfig.pulseSize,
      minScale: this.config.minScale ?? this.defaultConfig.minScale,
      maxScale: this.config.maxScale ?? this.defaultConfig.maxScale,
      opacity: this.config.opacity ?? this.defaultConfig.opacity,
      delay: this.config.delay ?? this.defaultConfig.delay,
      loop: this.config.loop ?? this.defaultConfig.loop,
      loopDelay: this.config.loopDelay ?? this.defaultConfig.loopDelay,
      autoStart: this.config.autoStart ?? this.defaultConfig.autoStart
    };
  }

  private convertColorToRgba(color: string): { rgb: string; rgba: string } {
    // Create a temporary element to compute the color
    const tempElement = this.renderer.createElement('div');
    this.renderer.setStyle(tempElement, 'color', color);
    this.renderer.appendChild(document.body, tempElement);
    
    const computedColor = window.getComputedStyle(tempElement).color;
    this.renderer.removeChild(document.body, tempElement);
    
    // Extract RGB values and create RGBA version
    const rgbMatch = computedColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgbMatch) {
      const [, r, g, b] = rgbMatch;
      return {
        rgb: `rgb(${r}, ${g}, ${b})`,
        rgba: `rgba(${r}, ${g}, ${b}, ${this.activeConfig.opacity})`
      };
    }
    
    // If already rgba or other format, return as is
    return {
      rgb: computedColor,
      rgba: computedColor.replace('rgb(', 'rgba(').replace(')', `, ${this.activeConfig.opacity})`)
    };
  }

  public startPulseEffect() {
    if (!this.isBrowser) {
      console.warn('Cannot start pulse effect: not in browser');
      return;
    }
    
    this.injectAnimationStyles();
    this.applyAnimation();
  }

  public stopPulseEffect() {
    if (!this.isBrowser) return;
    
    const element = this.el.nativeElement;
    this.renderer.setStyle(element, 'animation', 'none');
  }

  public restartPulseEffect() {
    if (!this.isBrowser) return;
    
    this.stopPulseEffect();
    setTimeout(() => {
      this.startPulseEffect();
    }, 10);
  }

  private injectAnimationStyles() {
    if (!this.isBrowser) return;

    // Remove existing style element if it exists
    if (this.styleElement) {
      this.renderer.removeChild(document.head, this.styleElement);
    }

    this.styleElement = this.renderer.createElement('style');
    
    const colors = this.convertColorToRgba(this.activeConfig.pulseColor!);
    
    // Calculate animation properties
    const loopAnimation = this.activeConfig.loop ? 'infinite' : '';
    
    // Parse animation duration to calculate total cycle time
    const animationDuration = parseFloat(this.activeConfig.animationDuration?.replace('s', '') || '2');
    const totalCycleTime = animationDuration + (this.activeConfig.loopDelay || 0);
    
    // Create keyframes for the complete cycle including loop delay
    const keyframeAnimation = this.activeConfig.loop && this.activeConfig.loopDelay && this.activeConfig.loopDelay > 0
      ? `${this.animationName}-cycle`
      : this.animationName;
    
    let keyframes = '';
    
    if (this.activeConfig.loop && this.activeConfig.loopDelay && this.activeConfig.loopDelay > 0) {
      // Calculate percentages for animation and pause
      const animationPercent = (animationDuration / totalCycleTime) * 100;
      const midPoint = (70 / 100) * animationPercent; // 70% of the animation portion
      
      keyframes = `
        @keyframes ${this.animationName}-cycle {
          0% {
            transform: scale(${this.activeConfig.minScale});
            box-shadow: 0 0 0 0 ${colors.rgba};
          }
          ${midPoint}% {
            transform: scale(${this.activeConfig.maxScale});
            box-shadow: 0 0 0 ${this.activeConfig.pulseSize} rgba(${colors.rgba.match(/\d+/g)?.slice(0, 3).join(', ')}, 0);
          }
          ${animationPercent}% {
            transform: scale(${this.activeConfig.minScale});
            box-shadow: 0 0 0 0 rgba(${colors.rgba.match(/\d+/g)?.slice(0, 3).join(', ')}, 0);
          }
          100% {
            transform: scale(${this.activeConfig.minScale});
            box-shadow: 0 0 0 0 rgba(${colors.rgba.match(/\d+/g)?.slice(0, 3).join(', ')}, 0);
          }
        }
      `;
    } else {
      keyframes = `
        @keyframes ${this.animationName} {
          0% {
            transform: scale(${this.activeConfig.minScale});
            box-shadow: 0 0 0 0 ${colors.rgba};
          }
          70% {
            transform: scale(${this.activeConfig.maxScale});
            box-shadow: 0 0 0 ${this.activeConfig.pulseSize} rgba(${colors.rgba.match(/\d+/g)?.slice(0, 3).join(', ')}, 0);
          }
          100% {
            transform: scale(${this.activeConfig.minScale});
            box-shadow: 0 0 0 0 rgba(${colors.rgba.match(/\d+/g)?.slice(0, 3).join(', ')}, 0);
          }
        }
      `;
    }
    
    const styles = `
      ${keyframes}
    `;
    
    this.renderer.appendChild(this.styleElement, this.renderer.createText(styles));
    this.renderer.appendChild(document.head, this.styleElement);
  }

  private applyAnimation() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    
    // Calculate animation properties
    const loopAnimation = this.activeConfig.loop ? 'infinite' : '';
    const animationDuration = parseFloat(this.activeConfig.animationDuration?.replace('s', '') || '2');
    const totalCycleTime = animationDuration + (this.activeConfig.loopDelay || 0);
    
    const keyframeAnimation = this.activeConfig.loop && this.activeConfig.loopDelay && this.activeConfig.loopDelay > 0
      ? `${this.animationName}-cycle`
      : this.animationName;
    
    const animationValue = `${keyframeAnimation} ${totalCycleTime}s ${loopAnimation}`;
    
    this.renderer.setStyle(element, 'animation', animationValue);
  }
}

/* 
<!-- Basic usage with original element color -->
<button appPulsatingEffect>Pulse Button</button>

<!-- With custom pulse color -->
<div 
  appPulsatingEffect
  [config]="{
    pulseColor: 'rgba(0, 255, 0, 0.8)',
    animationDuration: '1.5s',
    pulseSize: '20px'
  }"
  class="my-element">
  Custom Pulse
</div>

<!-- With scaling and timing options -->
<div 
  appPulsatingEffect
  [config]="{
    minScale: 0.9,
    maxScale: 1.1,
    opacity: 0.5,
    animationDuration: '3s',
    pulseSize: '25px'
  }">
  Custom Scale Pulse
</div>

<!-- With delay and loop control -->
<button 
  appPulsatingEffect
  [config]="{
    delay: 2,
    loop: true,
    loopDelay: 1,
    pulseColor: 'rgba(255, 0, 0, 0.6)'
  }">
  Delayed Pulse
</button>

<!-- Manual control -->
<div 
  appPulsatingEffect
  [config]="{autoStart: false}"
  #pulseElement>
  Manual Pulse Control
</div>
<button (click)="pulseElement.startPulseEffect()">Start</button>
<button (click)="pulseElement.stopPulseEffect()">Stop</button>
<button (click)="pulseElement.restartPulseEffect()">Restart</button>
 */
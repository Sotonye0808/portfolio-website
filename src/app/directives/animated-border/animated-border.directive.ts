import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface AnimatedBorderConfig {
  borderColor?: string;
  animationDuration?: string;
  borderRadius?: string;
  paddingSize?: string;
  delay?: number; // Delay in seconds before animation starts
  loop?: boolean;
  loopDelay?: number; // Delay between loops in seconds
}

@Directive({
  selector: '[appAnimatedBorder]',
  standalone: true
})
export class AnimatedBorderDirective implements OnInit, OnDestroy {
  @Input() config: AnimatedBorderConfig = {};

  defaultConfig: AnimatedBorderConfig = {
    borderColor: 'rgba(255, 255, 255, .5)',
    animationDuration: '2s',
    borderRadius: '6px',
    paddingSize: '2px',
    delay: 0,
    loop: true,
    loopDelay: 0
  };

  activeConfig: AnimatedBorderConfig = {};

  private effectWrapper: HTMLElement | null = null;
  private styleElement: HTMLStyleElement | null = null;
  private animationName: string = '';
  isBrowser!: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    // Generate unique animation name to avoid conflicts
    const uniqueId = Math.random().toString(36).substr(2, 9);
    this.animationName = `animated-border-rotate-${uniqueId}`;
  }

  ngOnInit() {
    if (!this.isBrowser) return;
    
    this.setupConfig();
    this.createAnimatedBorder();
    this.injectStyles();
  }

  ngOnDestroy() {
    if (this.styleElement && this.isBrowser) {
      this.renderer.removeChild(document.head, this.styleElement);
    }
  }

  private setupConfig() {
    this.activeConfig = {
      borderColor: this.config.borderColor ?? this.defaultConfig.borderColor,
      animationDuration: this.config.animationDuration ?? this.defaultConfig.animationDuration,
      borderRadius: this.config.borderRadius ?? this.defaultConfig.borderRadius,
      paddingSize: this.config.paddingSize ?? this.defaultConfig.paddingSize,
      delay: this.config.delay ?? this.defaultConfig.delay,
      loop: this.config.loop ?? this.defaultConfig.loop,
      loopDelay: this.config.loopDelay ?? this.defaultConfig.loopDelay
    };
  }

  private createAnimatedBorder() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    
    // Make the host element relative positioned
    this.renderer.setStyle(element, 'position', 'relative');
    this.renderer.setStyle(element, 'border-radius', this.activeConfig.borderRadius);
    
    // Create the effect wrapper
    this.effectWrapper = this.renderer.createElement('div');
    this.renderer.addClass(this.effectWrapper, 'animated-border-effect');
    
    // Create the rotating gradient div
    const rotatingDiv = this.renderer.createElement('div');
    this.renderer.addClass(rotatingDiv, 'animated-border-gradient');
    
    // Append the rotating div to the effect wrapper
    this.renderer.appendChild(this.effectWrapper, rotatingDiv);
    
    // Append the effect wrapper to the host element
    this.renderer.appendChild(element, this.effectWrapper);
  }

  private injectStyles() {
    if (!this.isBrowser) return;

    this.styleElement = this.renderer.createElement('style');
    
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
      
      keyframes = `
        @keyframes ${this.animationName}-cycle {
          0% {
            transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
          }
          ${animationPercent}% {
            transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
          }
          100% {
            transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
          }
        }
      `;
    } else {
      keyframes = `
        @keyframes ${this.animationName} {
          from {
            transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
          }
          to {
            transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
          }
        }
      `;
    }
    
    const styles = `
      .animated-border-effect {
        pointer-events: none;
        border-radius: ${this.activeConfig.borderRadius};
        width: calc(100% - 1px);
        height: calc(100% - 1px);
        position: absolute;
        top: 0;
        left: 0;
        padding: ${this.activeConfig.paddingSize};
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: exclude;
        mask-composite: exclude;
        -webkit-mask-composite: xor;
      }

      .animated-border-gradient {
        background-image: conic-gradient(
          from 0 at 50% 50%, 
          ${this.activeConfig.borderColor} 0deg, 
          rgba(255, 255, 255, 0) 60deg, 
          rgba(255, 255, 255, 0) 310deg, 
          ${this.activeConfig.borderColor} 360deg
        );
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        animation: ${keyframeAnimation} ${totalCycleTime}s linear ${this.activeConfig.delay}s ${loopAnimation};
        aspect-ratio: 1;
      }

      ${keyframes}
    `;
    
    this.renderer.appendChild(this.styleElement, this.renderer.createText(styles));
    this.renderer.appendChild(document.head, this.styleElement);
  }

  // Public methods for manual control
  public startAnimation() {
    if (!this.isBrowser) return;
    this.injectStyles();
  }

  public stopAnimation() {
    if (!this.isBrowser) return;
    
    const gradientElement = this.effectWrapper?.querySelector('.animated-border-gradient') as HTMLElement;
    if (gradientElement) {
      this.renderer.setStyle(gradientElement, 'animation', 'none');
    }
  }

  public restartAnimation() {
    if (!this.isBrowser) return;
    
    this.stopAnimation();
    setTimeout(() => {
      this.startAnimation();
    }, 10);
  }
}

/*
<!-- Basic usage with default config -->
<button appAnimatedBorder>Subscribe</button>

<!-- With custom config -->
<div 
  appAnimatedBorder
  [config]="{
    borderColor: 'rgba(0, 255, 0, .5)',
    animationDuration: '3s',
    borderRadius: '12px',
    paddingSize: '3px'
  }"
  class="my-element">
  Custom Element
</div>

<!-- With delay and loop settings -->
<button 
  appAnimatedBorder
  [config]="{
    borderColor: 'rgba(255, 0, 0, .8)',
    delay: 2,
    loop: true,
    loopDelay: 1,
    animationDuration: '1.5s'
  }">
  Delayed Animation
</button>

<!-- Non-looping animation -->
<div 
  appAnimatedBorder
  [config]="{
    loop: false,
    borderColor: 'rgba(0, 150, 255, .7)'
  }">
  Single Animation
</div>

<!-- Manual control -->
<div 
  appAnimatedBorder
  [config]="{loop: false}"
  #borderElement>
  Manual Control
</div>
<button (click)="borderElement.startAnimation()">Start</button>
<button (click)="borderElement.stopAnimation()">Stop</button>
<button (click)="borderElement.restartAnimation()">Restart</button>
*/
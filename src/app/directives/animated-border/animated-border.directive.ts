import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAnimatedBorder]',
  standalone: true
})

export class AnimatedBorderDirective implements OnInit, OnDestroy {
  @Input() borderColor: string = 'rgba(255, 255, 255, .5)';
  @Input() animationDuration: string = '2s';
  @Input() borderRadius: string = '6px';
  @Input() paddingSize: string = '2px';

  private effectWrapper: HTMLElement | null = null;
  private styleElement: HTMLStyleElement | null = null;
  isBrowser!: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.createAnimatedBorder();
    this.injectStyles();
  }

  ngOnDestroy() {
    if (this.styleElement && this.isBrowser) {
      this.renderer.removeChild(document.head, this.styleElement);
    }
  }

  private createAnimatedBorder() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement;
    
    // Make the host element relative positioned
    this.renderer.setStyle(element, 'position', 'relative');
    this.renderer.setStyle(element, 'border-radius', this.borderRadius);
    
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
    
    const styles = `
      .animated-border-effect {
        pointer-events: none;
        border-radius: ${this.borderRadius};
        width: calc(100% - 1px);
        height: calc(100% - 1px);
        position: absolute;
        top: 0;
        left: 0;
        padding: ${this.paddingSize};
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: exclude;
        mask-composite: exclude;
        -webkit-mask-composite: xor;
      }

      .animated-border-gradient {
        background-image: conic-gradient(
          from 0 at 50% 50%, 
          ${this.borderColor} 0deg, 
          rgba(255, 255, 255, 0) 60deg, 
          rgba(255, 255, 255, 0) 310deg, 
          ${this.borderColor} 360deg
        );
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        animation: animated-border-rotate ${this.animationDuration} linear infinite;
        aspect-ratio: 1;
      }

      @keyframes animated-border-rotate {
        from {
          transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
        }
        to {
          transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
        }
      }
    `;
    
    this.renderer.appendChild(this.styleElement, this.renderer.createText(styles));
    this.renderer.appendChild(document.head, this.styleElement);
  }
}

/*
<!-- Basic usage -->
<button appAnimatedBorder>Subscribe</button>

<!-- With custom properties -->
<div 
  appAnimatedBorder
  [borderColor]="'rgba(0, 255, 0, .5)'"
  [animationDuration]="'3s'"
  [borderRadius]="'12px'"
  class="my-element">
  Custom Element
</div>
*/
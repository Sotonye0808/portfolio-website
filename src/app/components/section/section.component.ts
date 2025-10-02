import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingEffectDirective, TypingEffectConfig } from '../../directives/typing-effect/typing-effect.directive';

@Component({
    selector: 'app-section',
    standalone: true,
    imports: [CommonModule, TypingEffectDirective],
    templateUrl: './section.component.html',
    styleUrl: './section.component.scss'
})
export class SectionComponent {
    @Input() title?: string;
    @Input() subtitle?: string;
    
    // Typing effect properties for title
    @Input() titleTypingEffect: boolean = false;
    @Input() titleTypingEffectConfig: TypingEffectConfig = {
        typingSpeed: 2,
        blinkSpeed: 0.5,
        cursorColor: 'currentColor',
        autoStart: true,
        loop: true,
    }
    
    
    // Typing effect properties for subtitle
    @Input() subtitleTypingEffect: boolean = false;
    @Input() subtitleTypingEffectConfig: TypingEffectConfig = {
        typingSpeed: 2,
        blinkSpeed: 0.5,
        cursorColor: 'currentColor',
        autoStart: true,
        loop: true,
    }
}
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface TechItem {
    icon: IconDefinition;
    name: string;
    color?: string;
}

@Component({
    selector: 'app-tech-stack',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './tech-stack.component.html',
    styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
    @Input() techStack: TechItem[] = [];
}

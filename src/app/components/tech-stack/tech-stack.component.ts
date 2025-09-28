import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TechItem {
    icon: string;
    name: string;
    color?: string;
}

@Component({
    selector: 'app-tech-stack',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tech-stack.component.html',
    styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent {
    @Input() techStack: TechItem[] = [];
}

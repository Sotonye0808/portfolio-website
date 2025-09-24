import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './section.component.html',
    styleUrl: './section.component.scss'
})
export class SectionComponent {
    @Input() title?: string;
    @Input() subtitle?: string;
}

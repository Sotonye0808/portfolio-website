import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TechItem {
    icon: string;
    name: string;
    color?: string;
    category?: 'frontend' | 'backend' | 'database' | 'devtools';
}

export interface TechCategory {
    title: string;
    items: TechItem[];
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
    @Input() categories: TechCategory[] = [];
    @Input() displayMode: 'pills' | 'cards' | 'bar' = 'pills';
    @Input() techNames: string[] = []; // For bar mode - array of tech names to display

    get categorizedTech(): TechCategory[] {
        if (this.categories.length > 0) {
            return this.categories;
        }

        // Auto-categorize based on tech items
        const frontend = this.techStack.filter(tech =>
            ['Angular', 'React', 'Redux', 'CSS', 'HTML5', 'JavaScript', 'Bootstrap', 'Tailwind'].includes(tech.name)
        );

        const backend = this.techStack.filter(tech =>
            ['NodeJS', 'Express', 'Python', 'Java', 'Apache'].includes(tech.name)
        );

        const database = this.techStack.filter(tech =>
            ['MongoDB', 'Mongoose', 'MySQL', 'Firebase'].includes(tech.name)
        );

        const devtools = this.techStack.filter(tech =>
            ['Git'].includes(tech.name)
        );

        return [
            { title: 'Frontend', items: frontend },
            { title: 'Backend', items: backend },
            { title: 'DB/Services', items: database },
            { title: 'DevTools', items: devtools }
        ].filter(category => category.items.length > 0);
    }
    
    get barTechItems(): TechItem[] {
        if (!this.techNames || this.techNames.length === 0) {
            return [];
        }
        
        return this.techNames
            .map(name => this.techStack.find(tech => tech.name === name))
            .filter(tech => tech !== undefined) as TechItem[];
    }
}

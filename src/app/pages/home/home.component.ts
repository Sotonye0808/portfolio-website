import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionComponent } from '../../components/section/section.component';
import { CardComponent } from '../../components/card/card.component';
import { TechStackComponent, TechItem, techStackVariable } from '../../components/tech-stack/tech-stack.component';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { ContactLinks } from '../about/about.component';
import { TypingEffectDirective } from '../../directives/typing-effect/typing-effect.directive';
import { AnimatedBorderDirective } from '../../directives/animated-border/animated-border.directive';
import { PulsatingEffectDirective } from '../../directives/pulsating-effect/pulsating-effect.directive';

interface SidebarSection {
  id: string;
  title?: string;
  type: 'profile' | 'tech-stack' | 'daily-tools' | 'quick-nav' | 'contact-links' | 'featured-project' | 'stats' | 'custom';
  data?: any;
  customTemplate?: boolean;
}

interface QuickNavItem {
  title: string;
  description: string;
  route: string;
  icon: string;
  count: string;
}

interface DailyTool {
  icon: string;
  name: string;
}

interface StatItem {
  label: string;
  value: string;
}

interface FeaturedProject {
  title: string;
  description: string;
  link: string;
  image?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SectionComponent,
    CardComponent,
    TechStackComponent,
    ImageViewerDirective,
    TypingEffectDirective,
    AnimatedBorderDirective,
    PulsatingEffectDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  techStack: TechItem[] = techStackVariable;

  // Profile data
  profileData = {
    name: 'DAGOGO Sotonye A.',
    tagline: 'Fullstack Web Developer & UI/UX Enthusiast',
    avatar: 'profile-picture.jpg',
    availability: 'Available for work'
  };

  // Daily tools data
  dailyTools: DailyTool[] = this.techStack.filter(tech =>
    ['VSCode', 'Angular', 'NodeJS', 'MongoDB', 'Git', 'Tailwind'].includes(tech.name)
  );

  // Quick navigation data
  quickNavigation: QuickNavItem[] = [
    {
      title: 'About',
      description: 'Learn more about my background and experience',
      route: '/about',
      icon: '👨‍💻',
      count: '5+ years experience'
    },
    {
      title: 'Projects',
      description: 'Explore my latest work and side projects',
      route: '/projects',
      icon: '🚀',
      count: '20+ projects'
    },
    {
      title: 'Certificates',
      description: 'View my professional certifications',
      route: '/certificates',
      icon: '🏆',
      count: '10+ certificates'
    }
  ];

  // Contact links
  contactLinks = ContactLinks;

  // Featured project data
  featuredProject: FeaturedProject = {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Angular and Tailwind CSS showcasing my work and skills.',
    link: 'https://github.com/Sotonye0808/portfolio-website',
    image: 'portfolio-preview.jpg'
  };

  // Stats data
  stats: StatItem[] = [
    { label: 'Projects', value: '20+' },
    { label: 'Technologies', value: '18+' },
    { label: 'Years Exp.', value: '5+' },
    { label: 'Certificates', value: '10+' }
  ];

  // Sidebar configuration
  leftSidebar: SidebarSection[] = [
    {
      id: 'tech-stack',
      title: '🎯 TECH STACK',
      type: 'tech-stack',
      data: this.techStack
    }
  ];

  mainContent: SidebarSection[] = [
    {
      id: 'profile',
      type: 'profile',
      data: this.profileData,
      customTemplate: true
    },
    {
      id: 'daily-tools',
      title: 'Daily Tool Stack',
      type: 'daily-tools',
      data: this.dailyTools
    },
    {
      id: 'quick-nav',
      type: 'quick-nav',
      data: this.quickNavigation
    }
  ];

  rightSidebar: SidebarSection[] = [
    {
      id: 'contact-links',
      title: 'LINKS',
      type: 'contact-links',
      data: this.contactLinks
    },
    {
      id: 'featured-project',
      type: 'featured-project',
      data: this.featuredProject
    },
    {
      id: 'stats',
      title: 'STATS',
      type: 'stats',
      data: this.stats
    }
  ];

  // Helper method for tracking
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }


  // Contact link handler
  openContactLink(link: string): void {
    window.open(link, '_blank');
  }
}
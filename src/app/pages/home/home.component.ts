import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionComponent } from '../../components/section/section.component';
import { CardComponent } from '../../components/card/card.component';
import { TechStackComponent, TechItem } from '../../components/tech-stack/tech-stack.component';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { ContactLinks } from '../about/about.component';

const imageDir = "techStackIcons";

export const techStackVariable: TechItem[] = [
  { icon: `${imageDir}/angular-original.svg`, name: "Angular" },
  { icon: `${imageDir}/react-original-wordmark.svg`, name: "React" },
  { icon: `${imageDir}/redux-original.svg`, name: "Redux" },
  { icon: `${imageDir}/css3-plain-wordmark.svg`, name: "CSS" },
  { icon: `${imageDir}/html5-original.svg`, name: "HTML5" },
  { icon: `${imageDir}/javascript-original.svg`, name: "JavaScript" },
  { icon: `${imageDir}/firebase-plain-wordmark.svg`, name: "Firebase" },
  { icon: `${imageDir}/mongodb-original-wordmark.svg`, name: "MongoDB" },
  { icon: `${imageDir}/mongoose-original-wordmark.svg`, name: "Mongoose" },
  { icon: `${imageDir}/express-original-wordmark.svg`, name: "Express" },
  { icon: `${imageDir}/mysql-original-wordmark.svg`, name: "MySQL" },
  { icon: `${imageDir}/bootstrap-original-wordmark.svg`, name: "Bootstrap" },
  { icon: `${imageDir}/tailwindcss-original.svg`, name: "Tailwind" },
  { icon: `${imageDir}/nodejs-original-wordmark.svg`, name: "NodeJS" },
  { icon: `${imageDir}/git-original-wordmark.svg`, name: "Git" },
  { icon: `${imageDir}/python-original-wordmark.svg`, name: "Python" },
  { icon: `${imageDir}/apache-plain-wordmark.svg`, name: "Apache" },
  { icon: `${imageDir}/java-original-wordmark.svg`, name: "Java" }
];

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
    ImageViewerDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imageDir = imageDir;

  // Use the exported constant
  techStack: TechItem[] = techStackVariable;

  profileData = {
    name: 'DAGOGO Sotonye A.',
    tagline: 'Fullstack Web Developer & UI/UX Enthusiast',
    avatar: 'profile-picture.jpg',
    availability: 'Available for work'
  };

  dailyTools = [
    { icon: `${this.imageDir}/angular-original.svg`, name: "Angular" },
    { icon: `${this.imageDir}/nodejs-original-wordmark.svg`, name: "Node.js" },
    { icon: `${this.imageDir}/mongodb-original-wordmark.svg`, name: "MongoDB" },
    { icon: `${this.imageDir}/git-original-wordmark.svg`, name: "Git" }
  ];

  quickNavigation = [
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

  contactLinks = ContactLinks;

  featuredProject = {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Angular and Tailwind CSS showcasing my work and skills.',
    link: 'https://github.com/Sotonye0808/portfolio-website'
  };

  stats = [
    { label: 'Projects', value: '20+' },
    { label: 'Technologies', value: '18+' },
    { label: 'Years Exp.', value: '5+' },
    { label: 'Certificates', value: '10+' }
  ];
}
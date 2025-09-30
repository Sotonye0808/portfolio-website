import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../../components/card/card.component';
import { SectionComponent } from '../../components/section/section.component';
import { TechStackComponent, TechItem } from '../../components/tech-stack/tech-stack.component';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faYinYang } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterModule } from '@angular/router';
import { techStackVariable } from '../home/home.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink,
    RouterModule,
    CardComponent,
    SectionComponent,
    TechStackComponent,
    ImageViewerDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faYY = faYinYang;
  imageDir = "techStackIcons"

  techStack: TechItem[] = techStackVariable;

  contactLinks = ContactLinks;
}

export const ContactLinks = [
  {
    title: "GitHub",
    icon: faGithub,
    class: "",
    link: "https://github.com/Sotonye0808"
  },
  {
    title: "LinkedIn",
    icon: faLinkedin,
    class: "text-sky-700",
    link: "https://www.linkedin.com/in/sotonye-dagogo-bb6585255"
  },
  {
    title: "X ",
    icon: faXTwitter,
    class: "text-black",
    link: "https://x.com/therealsoshady"
  },
  {
    title: "Instagram",
    icon: faInstagram,
    class: "text-fuchsia-500",
    link: "https://instagram.com/_.sotonye._?igshid=YmMyMTA2M2Y="
  },
  {
    title: "Email",
    icon: faEnvelope,
    class: "text-rose-700",
    link: "mailto:sotydagz@gmail.com"
  }
]

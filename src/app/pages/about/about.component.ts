import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../../components/card/card.component';
import { SectionComponent } from '../../components/section/section.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';
import { ImageViewerDirective } from '../../directives/image-viewer/image-viewer.directive';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faYinYang } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
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
  contactLinks = ContactLinks;
  bioParagraphs: string[] = [
    'Welcome to my Portfolio Website! I am a fullstack web developer, specializing in a host of different technologies such as Angular, React, SQL, NodeJS, Python and much more.', 
    'With a First-class Bachelor\'s degree in Computer Engineering, I possess a vast array of skills and knowledge spread across various fields of technology. With my education and experience gathered from working on personal mini-projects, leading a team of developers in production and building applications for enterprises,  I am able to guarantee quality powerful web applications with an aesthetic design, as well as, efficiency in other computer-related services.',
    'On this portfolio website, one can view a few of the numerous projects I have built, the startup I launched (featured project on home page), an AI model I trained and much more. Some certificates I\'ve gathered over the years are also visible. Links to various platforms through which I can be contacted have also been provided.',
    'Learning never ends and there is always room for improvement. While I take on jobs and work on improving upon what I already know, I also strive to learn more and broaden my horizons. Expect Mobile App development, Cyber Security services and much more to be added to my skillset in time.'
  ]
  workExperiences: string[] = [
    'Project Manager', 'Fullstack Developer', 'Computer Engineer', 'Embedded Systems Expert', 'Robotics Systems Developer', 'AI Expert', 'IT and Networking Consultant', 'Hardware Repairs and Maintenance'
  ];
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


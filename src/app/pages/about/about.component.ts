import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from '../../components/card/card.component';
import { SectionComponent } from '../../components/section/section.component';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faYinYang } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterLink,
    RouterModule,
    CardComponent,
    SectionComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faYY = faYinYang;
  imageDir = "techStackIcons"

  techStack = [
    {
      image: `${this.imageDir}/angular-original.svg`,
      title: "Angular"
    },
    {
      image: `${this.imageDir}/react-original-wordmark.svg`,
      title: "React"
    },
    {
      image: `${this.imageDir}/redux-original.svg`,
      title: "Redux"
    },
    {
      image: `${this.imageDir}/css3-plain-wordmark.svg`,
      title: "CSS"
    },
    {
      image: `${this.imageDir}/html5-original.svg`,
      title: "HTML5"
    },
    {
      image: `${this.imageDir}/javascript-original.svg`,
      title: "JavaScript"
    },
    {
      image: `${this.imageDir}/firebase-plain-wordmark.svg`,
      title: "Firebase"
    },
    {
      image: `${this.imageDir}/mongodb-original-wordmark.svg`,
      title: "MongoDB"
    },
    {
      image: `${this.imageDir}/mongoose-original-wordmark.svg`,
      title: "Mongoose"
    },
    {
      image: `${this.imageDir}/express-original-wordmark.svg`,
      title: "Express"
    },
    {
      image: `${this.imageDir}/mysql-original-wordmark.svg`,
      title: "MySQL"
    },
    {
      image: `${this.imageDir}/bootstrap-original-wordmark.svg`,
      title: "Bootstrap"
    },
    {
      image: `${this.imageDir}/tailwindcss-original.svg`,
      title: "Tailwind"
    },
    {
      image: `${this.imageDir}/nodejs-original-wordmark.svg`,
      title: "NodeJS"
    },
    {
      image: `${this.imageDir}/git-original-wordmark.svg`,
      title: "Git"
    },
    {
      image: `${this.imageDir}/python-original-wordmark.svg`,
      title: "Python"
    },
    {
      image: `${this.imageDir}/apache-plain-wordmark.svg`,
      title: "Apache"
    },
    {
      image: `${this.imageDir}/java-original-wordmark.svg`,
      title: "Java"
    },
  ]

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

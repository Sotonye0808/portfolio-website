import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram, faAngular, faReact, faHtml5, faCss3, faBootstrap, faNode, faPython, faJava, faGit, faSass } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faTwitter = faXTwitter;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faSass = faSass
  faAngular = faAngular;
  faReact = faReact;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faBootstrap = faBootstrap;
  faNode = faNode;
  faPython = faPython;
  faJava = faJava;
  faGit = faGit;
}

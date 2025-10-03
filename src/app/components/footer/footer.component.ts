import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactLinks } from '../../pages/about/about.component';
import { CommonModule } from '@angular/common';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  year = new Date().getFullYear();
  toTheTop = faChevronCircleUp;

  socialLinks = ContactLinks;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

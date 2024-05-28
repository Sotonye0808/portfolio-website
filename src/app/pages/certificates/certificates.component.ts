import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  currentFrontendIndex = 0;
  currentBackendIndex = 0;
  currentFullstackIndex = 0;

  frontendCertificates = [
    {
      image: 'frontend-cert1.jpg',
      title: 'Responsive Web Design',
      description: 'Comprehensive training on building responsive web pages using HTML, CSS, and media queries.',
      link: 'https://www.freecodecamp.org/certification/Sotonye/responsive-web-design'
    },
    {
      image: 'frontend-cert2.jpg',
      title: 'JavaScript Algorithms and Data Structures',
      description: 'In-depth knowledge of JavaScript fundamentals, algorithms, and data structures.',
      link: 'https://www.freecodecamp.org/certification/Sotonye/javascript-algorithms-and-data-structures-v8'
    },
    {
      image: 'frontend-cert3.jpg',
      title: 'Front End Development Libraries',
      description: 'Proficiency in popular front end libraries such as React, Bootstrap, and jQuery.',
      link: 'https://www.freecodecamp.org/certification/Sotonye/front-end-development-libraries'
    }
  ];

  backendCertificates = [
    {
      image: 'backend-cert1.jpg',
      title: 'Back End Development and APIs',
      description: 'Expertise in building back end applications and RESTful APIs using Node.js and Express.',
      link: 'https://www.freecodecamp.org/certification/Sotonye/back-end-development-and-apis'
    },
    {
      image: 'backend-cert2.jpg',
      title: 'Quality Assurance',
      description: 'Skills in quality assurance and testing using Chai and Mocha.',
      link: 'https://www.freecodecamp.org/certification/Sotonye/quality-assurance-v7'
    }
  ];

  fullstackCertificates = [
    {
      image: 'fullstack-cert1.jpg',
      title: 'Data Visualization',
      description: 'Ability to create dynamic and interactive data visualizations using D3.js.',
      link: 'https://www.freecodecamp.org/certification/Sotonye/data-visualization'
    }
  ];

  prevCertificate(section: string) {
    switch (section) {
      case 'frontend':
        this.currentFrontendIndex = (this.currentFrontendIndex > 0) ? this.currentFrontendIndex - 1 : this.frontendCertificates.length - 1;
        break;
      case 'backend':
        this.currentBackendIndex = (this.currentBackendIndex > 0) ? this.currentBackendIndex - 1 : this.backendCertificates.length - 1;
        break;
      case 'fullstack':
        this.currentFullstackIndex = (this.currentFullstackIndex > 0) ? this.currentFullstackIndex - 1 : this.fullstackCertificates.length - 1;
        break;
    }
  }

  nextCertificate(section: string) {
    switch (section) {
      case 'frontend':
        this.currentFrontendIndex = (this.currentFrontendIndex < this.frontendCertificates.length - 1) ? this.currentFrontendIndex + 1 : 0;
        break;
      case 'backend':
        this.currentBackendIndex = (this.currentBackendIndex < this.backendCertificates.length - 1) ? this.currentBackendIndex + 1 : 0;
        break;
      case 'fullstack':
        this.currentFullstackIndex = (this.currentFullstackIndex < this.fullstackCertificates.length - 1) ? this.currentFullstackIndex + 1 : 0;
        break;
    }
  }
}
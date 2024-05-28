import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faGithub = faGithub;

  frameworksLibrariesProjects = [
    {
      image: 'frameworks-libraries-project1.jpg',
      title: 'Project 1',
      description: 'Description of Frameworks and Libraries Project 1',
      githubLink: 'https://github.com/username/project1',
      githubRepo: 'project1',
      liveLink: 'https://live-project1.com'
    },
    {
      image: 'frameworks-libraries-project2.jpg',
      title: 'Project 2',
      description: 'Description of Frameworks and Libraries Project 2',
      githubLink: 'https://github.com/username/project2',
      githubRepo: 'project2',
      liveLink: 'https://live-project2.com'
    }
  ];

  basicHtmlCssJsProjects = [
    {
      image: 'basic-html-css-js-project1.jpg',
      title: 'Project 1',
      description: 'Description of Basic HTML, CSS and JS Project 1',
      githubLink: 'https://github.com/username/project1',
      githubRepo: 'project1',
      liveLink: 'https://live-project1.com'
    },
    {
      image: 'basic-html-css-js-project2.jpg',
      title: 'Project 2',
      description: 'Description of Basic HTML, CSS and JS Project 2',
      githubLink: 'https://github.com/username/project2',
      githubRepo: 'project2',
      liveLink: 'https://live-project2.com'
    }
  ];

  pythonProjects = [
    {
      image: 'python-project1.jpg',
      title: 'Project 1',
      description: 'Description of Python Project 1',
      githubLink: 'https://github.com/username/project1',
      githubRepo: 'project1',
      liveLink: 'https://live-project1.com'
    },
    {
      image: 'python-project2.jpg',
      title: 'Project 2',
      description: 'Description of Python Project 2',
      githubLink: 'https://github.com/username/project2',
      githubRepo: 'project2',
      liveLink: 'https://live-project2.com'
    }
  ];

  miniProjects = [
    {
      image: 'mini-project1.jpg',
      title: 'Mini Project 1',
      description: 'Description of Mini Project 1',
      githubLink: 'https://github.com/username/project1',
      githubRepo: 'project1',
      liveLink: 'https://live-project1.com'
    },
    {
      image: 'mini-project2.jpg',
      title: 'Mini Project 2',
      description: 'Description of Mini Project 2',
      githubLink: 'https://github.com/username/project2',
      githubRepo: 'project2',
      liveLink: 'https://live-project2.com'
    }
  ];

  currentFrameworksLibrariesIndex = 0;
  currentBasicHtmlCssJsIndex = 0;
  currentPythonIndex = 0;
  currentMiniProjectsIndex = 0;

  prevProject(section: string) {
    switch (section) {
      case 'frameworksLibraries':
        this.currentFrameworksLibrariesIndex = (this.currentFrameworksLibrariesIndex > 0) ? this.currentFrameworksLibrariesIndex - 1 : this.frameworksLibrariesProjects.length - 1;
        break;
      case 'basicHtmlCssJs':
        this.currentBasicHtmlCssJsIndex = (this.currentBasicHtmlCssJsIndex > 0) ? this.currentBasicHtmlCssJsIndex - 1 : this.basicHtmlCssJsProjects.length - 1;
        break;
      case 'python':
        this.currentPythonIndex = (this.currentPythonIndex > 0) ? this.currentPythonIndex - 1 : this.pythonProjects.length - 1;
        break;
      case 'miniProjects':
        this.currentMiniProjectsIndex = (this.currentMiniProjectsIndex > 0) ? this.currentMiniProjectsIndex - 1 : this.miniProjects.length - 1;
        break;
    }
  }

  nextProject(section: string) {
    switch (section) {
      case 'frameworksLibraries':
        this.currentFrameworksLibrariesIndex = (this.currentFrameworksLibrariesIndex < this.frameworksLibrariesProjects.length - 1) ? this.currentFrameworksLibrariesIndex + 1 : 0;
        break;
      case 'basicHtmlCssJs':
        this.currentBasicHtmlCssJsIndex = (this.currentBasicHtmlCssJsIndex < this.basicHtmlCssJsProjects.length - 1) ? this.currentBasicHtmlCssJsIndex + 1 : 0;
        break;
      case 'python':
        this.currentPythonIndex = (this.currentPythonIndex < this.pythonProjects.length - 1) ? this.currentPythonIndex + 1 : 0;
        break;
      case 'miniProjects':
        this.currentMiniProjectsIndex = (this.currentMiniProjectsIndex < this.miniProjects.length - 1) ? this.currentMiniProjectsIndex + 1 : 0;
        break;
    }
  }
}

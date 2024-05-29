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
      image: 'task-tracker-2.jpg',
      title: 'Task Tracker App',
      description: 'This is a simple task tracker app built using Next.js (A React framework) and styled with Bootstrap. It allows users to track their tasks by adding and deleting them while also tracking their usage statistics.',
      githubLink: 'https://github.com/Sotonye0808/task-tracker-2',
      githubRepo: 'task-tracker-2',
      liveLink: 'https://task-tracker-2.vercel.app/'
    },
    {
      image: 'random-quote-machine.jpg',
      title: 'Random Quote Machine',
      description: 'This is a simple random quote machine built using React and styled with Bootstrap. It allows users to generate random quotes and share them on Twitter.',
      githubLink: 'https://github.com/Sotonye0808/randomQuoteMachine',
      githubRepo: 'randomQuoteMachine',
      liveLink: 'https://sotonye0808.github.io/randomQuoteMachine/'
    },
    {
      image: 'drum-machine.jpg',
      title: 'Drum Machine',
      description: 'This is a simple drum machine built using React and styled with Bootstrap. It allows users to play drum sounds by clicking on the drum pads or using the keyboard.',
      githubLink: 'https://github.com/Sotonye0808/drumMachine',
      githubRepo: 'drumMachine',
      liveLink: 'https://sotonye0808.github.io/drumMachine/'
    },
    {
      image: 'js-clock.jpg',
      title: '25 + 5 Clock',
      description: 'This is a simple 25 + 5 clock built using React and styled with Bootstrap. It allows users to set a timer for up to 25 minutes and take a break of up to 5 minutes. It also has a pause and reset button.',
      githubLink: 'https://github.com/Sotonye0808/js-clock',
      githubRepo: 'js-clock',
      liveLink: 'https://sotonye0808.github.io/js-clock/'
    },
    {
      image: 'javascript-calculator.jpg',
      title: 'JavaScript Calculator',
      description: 'This is a simple calculator built using React and styled with Bootstrap. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication and division. It also has a clear and delete button.',
      githubLink: 'https://github.com/Sotonye0808/javascriptCalculator',
      githubRepo: 'javascriptCalculator',
      liveLink: 'https://sotonye0808.github.io/javascriptCalculator/'
    },
    {
      image: 'markdown-previewer.jpg',
      title: 'Markdown Previewer',
      description: 'This is a simple markdown previewer built using React and styled with Bootstrap. It allows users to write markdown in the editor and see the preview in the previewer. It also has a clear button to clear the editor and previewer.',
      githubLink: 'https://github.com/Sotonye0808/markdownPreviewer',
      githubRepo: 'markdownPreviewer',
      liveLink: 'https://sotonye0808.github.io/markdownPreviewer/'
    },
    {
      image: 'portfolio-website.jpg',
      title: 'Portfolio Website',
      description: 'This is my portfolio website built using Angular and styled with TailwindCSS and SASS. It showcases my projects, skills, certificates and contact information. It also has a dark mode and light mode.',
      githubLink: 'https://github.com/Sotonye0808/portfolio-website',
      githubRepo: 'portfolio-website',
      liveLink: 'https://sotonye-dagogo.netlify.app/'
    }
  ];

  basicHtmlCssJsProjects = [
    {
      image: 'ecommerce-webproj.jpg',
      title: 'E-commerce Website Landing-page',
      description: 'This is a simple e-commerce website landing-page built using basic HTML, CSS and JavaScript. It allows users to view and interact with products.',
      githubLink: 'https://github.com/Sotonye0808/eCommerceWebProj',
      githubRepo: 'eCommerceWebProj',
      liveLink: 'https://sotonye0808.github.io/eCommerceWebProj/'
    },
    {
      image: 'countdown-timer.jpg',
      title: 'Countdown Timer',
      description: 'This is a simple countdown timer built using basic HTML, CSS and JavaScript. It counts down seconds, minutes, weeks, months and years till specific events. It also allows users to set a custom timer.',
      githubLink: 'https://github.com/Sotonye0808/valCountdownProject',
      githubRepo: 'valCountdownProject',
      liveLink: 'https://sotonye0808.github.io/valCountdownProject/'
    },
    {
      image: 'palindrome-checker.jpg',
      title: 'Palindrome Checker',
      description: 'This is a simple palindrome checker built using basic HTML, CSS and JavaScript. It allows users to check if a word or phrase is a palindrome. It also has a clear button to clear the input field.',
      githubLink: 'https://github.com/Sotonye0808/palindromeChecker',
      githubRepo: 'palindromeChecker',
      liveLink: 'https://sotonye0808.github.io/palindromeChecker/'
    },
    {
      image: 'telephone-validator.jpg',
      title: 'Telephone Number Validator',
      description: 'This is a simple telephone number validator built using basic HTML, CSS and JavaScript. It allows users to check if a telephone number (US) is valid. It also has a clear button to clear the input field.',
      githubLink: 'https://github.com/Sotonye0808/telephoneNumberValidator',
      githubRepo: 'telephoneNumberValidator',
      liveLink: 'https://sotonye0808.github.io/telephoneNumberValidator/'
    },
    {
      image: 'roman-converter.jpg',
      title: 'Roman Numeral Converter',
      description: 'This is a simple roman numeral converter built using basic HTML, CSS and JavaScript. It allows users to convert numbers [less than 4000] to roman numerals and vice versa. It also has a clear button to clear the input field.',
      githubLink: 'https://github.com/Sotonye0808/romanNumeralConverter',
      githubRepo: 'romanNumeralConverter',
      liveLink: 'https://sotonye0808.github.io/romanNumeralConverter/'
    },
    {
      image: 'webdev-practice.jpg',
      title: 'Web Development Practice',
      description: 'This is a simple web development practice project built using basic HTML, CSS and JavaScript. It is a very simple generic landing page.',
      githubLink: 'https://github.com/Sotonye0808/web_dev_practice',
      githubRepo: 'web_dev_practice',
      liveLink: 'https://sotonye0808.github.io/web_dev_practice/'
    }
  ];

  pythonProjects = [
    {
      image: 'dbm-package.jpg',
      title: 'MySQL Database Manager Package',
      description: 'This is a simple MySQL database manager package built using Python. It allows users to perform basic CRUD operations on a MySQL database, as well as other complex SQL database queries like joins. Please take a look at the README file in the GitHub repository for more information on how to use the package',
      githubLink: 'https://github.com/Sotonye0808/DBM_package',
      githubRepo: 'DBM_package',
      liveLink: 'https://sotonye0808.github.io/DBM_package/'
    },
  ];

  miniProjects = [
    {
      image: 'pokemon-search.jpg',
      title: 'Pokemon Search App',
      description: 'This is a simple pokemon search app built using basic HTML, CSS and JavaScript. It allows users to search for pokemon by name or id. It also displays the pokemon\'s image, type and abilities.',
      githubLink: 'https://github.com/Sotonye0808/pokemonSearchApp',
      githubRepo: 'pokemonSearchApp',
      liveLink: 'https://sotonye0808.github.io/pokemonSearchApp/'
    },
    {
      image: 'grid-magazine.jpg',
      title: 'FreeCodeCamp Magazine',
      description: 'This is a simple magazine layout built using basic HTML and CSS grid concepts. It is a project from FreeCodeCamp. It allows users to view and interact with articles.',
      githubLink: 'https://github.com/Sotonye0808/gridMagazine',
      githubRepo: 'gridMagazine',
      liveLink: 'https://sotonye0808.github.io/gridMagazine/'
    },
    {
      image: 'bar-chart.jpg',
      title: 'Bar Chart',
      description: 'This project aims to visualize the Gross Domestic Product (GDP) data for the United States and Nigeria using a bar chart. The chart is built using HTML, CSS, and JavaScript, with D3.js library utilized for data visualization.',
      githubLink: 'https://github.com/Sotonye0808/barChart',
      githubRepo: 'barChart',
      liveLink: 'https://sotonye0808.github.io/barChart/'
    },
    {
      image: 'heat-map.jpg',
      title: 'Heat Map',
      description: 'This project aims to visualize the monthly global land-surface temperature using a heat map. The heat map is built using HTML, CSS, and JavaScript, with D3.js library utilized for data visualization.',
      githubLink: 'https://github.com/Sotonye0808/heatMap',
      githubRepo: 'heatMap',
      liveLink: 'https://sotonye0808.github.io/heatMap/'
    },
    {
      image: 'city-skyline.jpg',
      title: 'City Skyline',
      description: 'This is a simple city skyline animation built using basic HTML and CSS. It is a project from FreeCodeCamp. It is responsive as it allows users to view and interact with the city skyline. It also has a day and night mode, which is activated by the screen size.',
      githubLink: 'https://github.com/Sotonye0808/citySkyline',
      githubRepo: 'citySkyline',
      liveLink: 'https://sotonye0808.github.io/citySkyline/'
    },
    {
      image: 'penguin-transforms.jpg',
      title: 'Penguin via Transforms',
      description: 'This is a simple penguin animation built using basic HTML and CSS. It is a project from FreeCodeCamp.',
      githubLink: 'https://github.com/Sotonye0808/penquinViaTransforms',
      githubRepo: 'penquinViaTransforms',
      liveLink: 'https://sotonye0808.github.io/penguinViaTransforms/'
    },
    {
      image: 'nutrition-label.jpg',
      title: 'Nutrition Label',
      description: 'This is a simple nutrition label built using basic HTML and CSS.',
      githubLink: 'https://github.com/Sotonye0808/nutritionLabel',
      githubRepo: 'nutritionLabel',
      liveLink: 'https://sotonye0808.github.io/nutritionLabel/'
    },
    {
      image: 'ferris-wheel.jpg',
      title: 'Ferris Wheel',
      description: 'This is a simple ferris wheel animation built using basic HTML and CSS.',
      githubLink: 'https://github.com/Sotonye0808/ferrisWheel',
      githubRepo: 'ferrisWheel',
      liveLink: 'https://sotonye0808.github.io/ferrisWheel/'
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

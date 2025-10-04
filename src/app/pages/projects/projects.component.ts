import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionComponent } from '../../components/section/section.component';
import { ImageGalleryComponent, GalleryCategory } from '../../components/image-gallery/image-gallery.component';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export interface Project {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  techStack: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    SectionComponent,
    ImageGalleryComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  faGithub = faGithub;
  categories: GalleryCategory[] = categories;
}

const imageDirs = {
  enterprise: "enterpriseProjects", frameworks: "frameworksLibrariesProjects", basic: "basicHtmlCssJsProjects", py: "pythonProjects", mini: "miniProjects"
}

const enterpriseProjects: Project[] = [
  {
    image: `${imageDirs.enterprise}/transact.jpg`,
    title: 'Transact Store',
    description: 'Transact is a platform that connects you to the best products, services, and experiences in the world. We are committed to providing you with the best shopping experience possible.',
    githubLink: 'private-repo',
    liveLink: 'https://transact-store.web.app',
    techStack: ['Angular', 'TypeScript', 'Tailwind', 'Firebase', 'NodeJS'],
    featured: true
  },
  {
    image: `${imageDirs.enterprise}/signature-app.jpg`,
    title: 'Signature App',
    description: 'SignatureApp is a web application built with Angular that allows users to create, save, and manage digital signatures. It is ideal for document signing, e-signature workflows, and personal signature storage.',
    githubLink: 'private-repo',
    liveLink: 'https://signature-eu.web.app',
    techStack: ['Angular', 'Django', 'Tailwind', 'Firebase', 'Python', 'TypeScript'],
  },
  {
    image: `${imageDirs.enterprise}/roxos-ornaments.jpg`,
    title: 'Roxo\'s Ornaments',
    description: 'Discover a wide range of unique jewellery and accessories for every occasion. Shop now at Roxo\'s Ornaments for elegant pieces.',
    githubLink: 'private-repo',
    liveLink: 'https://roxos-ornaments.web.app',
    techStack: ['Angular', 'TypeScript', 'Tailwind', 'Firebase', 'NodeJS', 'Django'],
  },
  {
    image: `${imageDirs.enterprise}/weather-app.png`,
    title: 'Weather App',
    description: 'A modern progressive web application (PWA) that provides real-time weather information for cities worldwide. Built with React and TypeScript, the app allows users to track weather conditions for the world\'s largest cities, search for any city globally, and maintain a personalized list of favorites—all while offering offline functionality through localStorage caching.',
    githubLink: 'https://github.com/Sotonye0808/weather-app',
    liveLink: 'https://meteor08.netlify.app/',
    techStack: ['React', 'Redux', 'Tailwind', 'TypeScript'],
  },
  {
    image: `${imageDirs.enterprise}/company-mgmt.png`,
    title: 'Company Management App',
    description: 'A Web Application for managing company information with offline capabilities, dark/light theme support, and responsive design.',
    githubLink: 'https://github.com/Sotonye0808/company-mgmt',
    liveLink: 'https://company-mgmt-three.vercel.app/',
    techStack: ['NextJS', 'Redux', 'Tailwind', 'TypeScript', 'GraphQL'],
  }
]

const frameworksLibrariesProjects: Project[] = [
  {
    image: `${imageDirs.frameworks}/task-tracker-2.jpg`,
    title: 'Task Tracker App',
    description: 'This is a simple task tracker app built using Next.js (A React framework) and styled with Bootstrap. It allows users to track their tasks by adding and deleting them while also tracking their usage statistics.',
    githubLink: 'https://github.com/Sotonye0808/task-tracker-2',
    liveLink: 'https://task-tracker-2.vercel.app/',
    techStack: ['NextJS', 'TypeScript', 'Bootstrap']
  },
  {
    image: `${imageDirs.frameworks}/random-quote-machine.jpg`,
    title: 'Random Quote Machine',
    description: 'This is a simple random quote machine built using React and styled with Bootstrap. It allows users to generate random quotes and share them on Twitter.',
    githubLink: 'https://github.com/Sotonye0808/randomQuoteMachine',
    liveLink: 'https://sotonye0808.github.io/randomQuoteMachine/',
    techStack: ['React', 'JavaScript', 'Bootstrap']
  },
  {
    image: `${imageDirs.frameworks}/drum-machine.jpg`,
    title: 'Drum Machine',
    description: 'This is a simple drum machine built using React and styled with Bootstrap. It allows users to play drum sounds by clicking on the drum pads or using the keyboard.',
    githubLink: 'https://github.com/Sotonye0808/drumMachine',
    liveLink: 'https://sotonye0808.github.io/drumMachine/',
    techStack: ['React', 'JavaScript', 'Bootstrap']
  },
  {
    image: `${imageDirs.frameworks}/js-clock.jpg`,
    title: '25 + 5 Clock',
    description: 'This is a simple 25 + 5 clock built using React and styled with Bootstrap. It allows users to set a timer for up to 25 minutes and take a break of up to 5 minutes. It also has a pause and reset button.',
    githubLink: 'https://github.com/Sotonye0808/js-clock',
    liveLink: 'https://sotonye0808.github.io/js-clock/',
    techStack: ['React', 'JavaScript', 'Bootstrap']
  },
  {
    image: `${imageDirs.frameworks}/javascript-calculator.jpg`,
    title: 'JavaScript Calculator',
    description: 'This is a simple calculator built using React and styled with Bootstrap. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication and division. It also has a clear and delete button.',
    githubLink: 'https://github.com/Sotonye0808/javascriptCalculator',
    liveLink: 'https://sotonye0808.github.io/javascriptCalculator/',
    techStack: ['React', 'JavaScript', 'Bootstrap']
  },
  {
    image: `${imageDirs.frameworks}/markdown-previewer.jpg`,
    title: 'Markdown Previewer',
    description: 'This is a simple markdown previewer built using React and styled with Bootstrap. It allows users to write markdown in the editor and see the preview in the previewer through data-binding.',
    githubLink: 'https://github.com/Sotonye0808/markdownPreviewer',
    liveLink: 'https://sotonye0808.github.io/markdownPreviewer/',
    techStack: ['React', 'JavaScript', 'Bootstrap']
  },
  {
    image: `${imageDirs.frameworks}/portfolio-website.jpg`,
    title: 'Portfolio Website',
    description: 'This is my portfolio website built using Angular and styled with TailwindCSS and SASS. It showcases my projects, skills, certificates and contact information. It also has a dark mode and light mode.',
    githubLink: 'https://github.com/Sotonye0808/portfolio-website',
    liveLink: 'https://sotonye-dagogo.is-a.dev/',
    techStack: ['Angular', 'TypeScript', 'Tailwind']
  }
];

const basicHtmlCssJsProjects: Project[] = [
  {
    image: `${imageDirs.basic}/ecommerce-webproj.jpg`,
    title: 'E-commerce Website Landing-page',
    description: 'This is a simple e-commerce website landing-page built using basic HTML, CSS and JavaScript. It allows users to view and interact with products.',
    githubLink: 'https://github.com/Sotonye0808/eCommerceWebProj',
    liveLink: 'https://sotonye0808.github.io/eCommerceWebProj/',
    techStack: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    image: `${imageDirs.basic}/countdown-timer.jpg`,
    title: 'Countdown Timer',
    description: 'This is a simple countdown timer built using basic HTML, CSS and JavaScript. It counts down seconds, minutes, weeks, months and years till specific events. It also allows users to set a custom timer.',
    githubLink: 'https://github.com/Sotonye0808/valCountdownProject',
    liveLink: 'https://sotonye0808.github.io/valCountdownProject/',
    techStack: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    image: `${imageDirs.basic}/palindrome-checker.jpg`,
    title: 'Palindrome Checker',
    description: 'This is a simple palindrome checker built using basic HTML, CSS and JavaScript. It allows users to check if a word or phrase is a palindrome. It also has a clear button to clear the input field.',
    githubLink: 'https://github.com/Sotonye0808/palindromeChecker',
    liveLink: 'https://sotonye0808.github.io/palindromeChecker/',
    techStack: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    image: `${imageDirs.basic}/telephone-validator.jpg`,
    title: 'Telephone Number Validator',
    description: 'This is a simple telephone number validator built using basic HTML, CSS and JavaScript. It allows users to check if a telephone number (US) is valid. It also has a clear button to clear the input field.',
    githubLink: 'https://github.com/Sotonye0808/telephoneNumberValidator',
    liveLink: 'https://sotonye0808.github.io/telephoneNumberValidator/',
    techStack: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    image: `${imageDirs.basic}/roman-converter.jpg`,
    title: 'Roman Numeral Converter',
    description: 'This is a simple roman numeral converter built using basic HTML, CSS and JavaScript. It allows users to convert numbers [less than 4000] to roman numerals and vice versa. It also has a clear button to clear the input field.',
    githubLink: 'https://github.com/Sotonye0808/romanNumeralConverter',
    liveLink: 'https://sotonye0808.github.io/romanNumeralConverter/',
    techStack: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    image: `${imageDirs.basic}/webdev-practice.jpg`,
    title: 'Web Development Practice',
    description: 'This is a simple web development practice project built using basic HTML, CSS and JavaScript. It is a very simple generic landing page.',
    githubLink: 'https://github.com/Sotonye0808/web_dev_practice',
    liveLink: 'https://sotonye0808.github.io/web_dev_practice/',
    techStack: ['HTML5', 'CSS', 'JavaScript']
  }
];

const pythonProjects: Project[] = [
  {
    image: `${imageDirs.py}/ann.jpg`,
    title: 'Sentiment Analysis using Transfer Learning',
    description: 'This project applies transfer learning to fine-tune the AfriBERTa multilingual language model for sentiment analysis of Yorùbá text, providing a robust solution for emotion detection in African language content.',
    githubLink: 'https://github.com/Sotonye0808/ann-project',
    liveLink: 'https://github.com/Sotonye0808/ann-project',
    techStack: ['Python']
  },
  {
    image: `${imageDirs.py}/dbm-package.jpg`,
    title: 'MySQL Database Manager Package',
    description: 'This is a simple MySQL database manager package built using Python. It allows users to perform basic CRUD operations on a MySQL database, as well as other complex SQL database queries like joins. Please take a look at the README file in the GitHub repository for more information on how to use the package',
    githubLink: 'https://github.com/Sotonye0808/DBM_package',
    liveLink: 'https://sotonye0808.github.io/DBM_package/',
    techStack: ['Python', 'MySQL', 'JavaScript', 'HTML5', 'CSS', 'Apache']
  },
];

const miniProjects: Project[] = [
  {
    image: `${imageDirs.mini}/pokemon-search.jpg`,
    title: 'Pokemon Search App',
    description: 'This is a simple pokemon search app built using basic HTML, CSS and JavaScript. It allows users to search for pokemon by name or id. It also displays the pokemon\'s image, type and abilities.',
    githubLink: 'https://github.com/Sotonye0808/pokemonSearchApp',
    liveLink: 'https://sotonye0808.github.io/pokemonSearchApp/',
    techStack: ['HTML5', 'CSS', 'JavaScript']
  },
  {
    image: `${imageDirs.mini}/grid-magazine.jpg`,
    title: 'FreeCodeCamp Magazine',
    description: 'This is a simple magazine layout built using basic HTML and CSS grid concepts. It is a project from FreeCodeCamp. It allows users to view and interact with articles.',
    githubLink: 'https://github.com/Sotonye0808/gridMagazine',
    liveLink: 'https://sotonye0808.github.io/gridMagazine/',
    techStack: ['HTML5', 'CSS']
  },
  {
    image: `${imageDirs.mini}/bar-chart.jpg`,
    title: 'Bar Chart',
    description: 'This project aims to visualize the Gross Domestic Product (GDP) data for the United States and Nigeria using a bar chart. The chart is built using HTML, CSS, and JavaScript, with D3.js library utilized for data visualization.',
    githubLink: 'https://github.com/Sotonye0808/barChart',
    liveLink: 'https://sotonye0808.github.io/barChart/',
    techStack: ['HTML5', 'CSS', 'JavaScript', 'D3JS']
  },
  {
    image: `${imageDirs.mini}/heat-map.jpg`,
    title: 'Heat Map',
    description: 'This project aims to visualize the monthly global land-surface temperature using a heat map. The heat map is built using HTML, CSS, and JavaScript, with D3.js library utilized for data visualization.',
    githubLink: 'https://github.com/Sotonye0808/heatMap',
    liveLink: 'https://sotonye0808.github.io/heatMap/',
    techStack: ['HTML5', 'CSS', 'JavaScript', 'D3JS']
  },
  {
    image: `${imageDirs.mini}/city-skyline.jpg`,
    title: 'City Skyline',
    description: 'This is a simple city skyline animation built using basic HTML and CSS. It is a project from FreeCodeCamp. It is responsive as it allows users to view and interact with the city skyline. It also has a day and night mode, which is activated by the screen size.',
    githubLink: 'https://github.com/Sotonye0808/citySkyline',
    liveLink: 'https://sotonye0808.github.io/citySkyline/',
    techStack: ['HTML5', 'CSS']
  },
  {
    image: `${imageDirs.mini}/penguin-transforms.jpg`,
    title: 'Penguin via Transforms',
    description: 'This is a simple penguin animation built using basic HTML and CSS. It is a project from FreeCodeCamp.',
    githubLink: 'https://github.com/Sotonye0808/penguinViaTransforms',
    liveLink: 'https://sotonye0808.github.io/penguinViaTransforms/',
    techStack: ['HTML5', 'CSS']
  },
  {
    image: `${imageDirs.mini}/nutrition-label.jpg`,
    title: 'Nutrition Label',
    description: 'This is a simple nutrition label built using basic HTML and CSS.',
    githubLink: 'https://github.com/Sotonye0808/nutritionLabel',
    liveLink: 'https://sotonye0808.github.io/nutritionLabel/',
    techStack: ['HTML5', 'CSS']
  },
  {
    image: `${imageDirs.mini}/ferris-wheel.jpg`,
    title: 'Ferris Wheel',
    description: 'This is a simple ferris wheel animation built using basic HTML and CSS.',
    githubLink: 'https://github.com/Sotonye0808/ferrisWheel',
    liveLink: 'https://sotonye0808.github.io/ferrisWheel/',
    techStack: ['HTML5', 'CSS']
  }
];

export const projects: Project[] = [
  ...enterpriseProjects,
  ...frameworksLibrariesProjects,
  ...basicHtmlCssJsProjects,
  ...pythonProjects,
  ...miniProjects
];

export const categories: GalleryCategory[] = [
  {
    title: 'Enterprise Projects',
    items: enterpriseProjects
  },
  {
    title: 'Frameworks and Libraries',
    items: frameworksLibrariesProjects
  },
  {
    title: 'Basic HTML, CSS, and JS',
    items: basicHtmlCssJsProjects
  },
  {
    title: 'Python',
    items: pythonProjects
  },
  {
    title: 'Mini-projects',
    items: miniProjects
  }
]

import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';


const routeConfig: Routes = [
    {
      path: '',
      component: AboutComponent
    },
    {
      path: 'projects',
      component: ProjectsComponent
    },
    {
        path: 'certificates',
        component: CertificatesComponent
      }
  ];
  export default routeConfig;

  export const routes = routeConfig;
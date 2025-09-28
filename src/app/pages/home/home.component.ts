import { Component } from '@angular/core';
import { SectionComponent } from '../../components/section/section.component';
import { CardComponent } from '../../components/card/card.component';
import { TechStackComponent } from '../../components/tech-stack/tech-stack.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionComponent,
    CardComponent,
    TechStackComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

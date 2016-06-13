import {Component} from 'angular2/core';
import NavbarComponent from '../navbar/navbar.ts';
import FooterComponent from '../footer/footer.ts';
import CarouselComponent from  '../carousel/carousel.ts';

@Component({
  selector: 'app-application',
  templateUrl: 'app/components/application/application.html',
  directives: [
    NavbarComponent,
    FooterComponent,
    CarouselComponent
  ]
})

export default class ApplicationComponent {}

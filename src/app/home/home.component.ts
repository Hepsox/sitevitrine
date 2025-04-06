import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MenuLink } from '../models/menu.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('logosSlide', { static: false }) logosSlide!: ElementRef;
  @ViewChild('logos', { static: false }) logos!: ElementRef;

  ngAfterViewInit() {
    if (this.logosSlide) {
      this.cloneLogosSlide();
    } else {
      console.error('logosSlide is undefined');
    }
  }

  cloneLogosSlide() {
    const copy = this.logosSlide.nativeElement.cloneNode(true);
    const logosContainer = this.logos.nativeElement;
    logosContainer?.appendChild(copy);

    const clonedLogosSlide = logosContainer.querySelector('.logos-slide');
    if (clonedLogosSlide) {
      clonedLogosSlide.style.animation = '10s slide infinite linear';
    }
  }
}

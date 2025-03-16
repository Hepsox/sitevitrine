import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { After } from 'v8';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
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
  }
}

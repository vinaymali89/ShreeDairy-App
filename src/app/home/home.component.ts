import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    'assets/homedairy.jpeg',
    'assets/designerslide.jpeg',
    'assets/homedairy3.jpeg',
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); // Change slide every 3 seconds
  }

  next() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.resetInterval();
  }

  resetInterval() {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}

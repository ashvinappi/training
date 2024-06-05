import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  currentImage = 0;
  totalImage = 4;
  autoplay = true;
  interval!: any;

  ngOnInit(): void {
    this.createAutoplay();
  }

  goImage(n: number) {
    this.currentImage = n;
    clearInterval(this.interval);
    this.createAutoplay();
  }

  goPrecedent() {
    if (this.currentImage > 0) {
      this.currentImage--;
    } else {
      this.currentImage = this.totalImage - 1;
    }
    clearInterval(this.interval);
    this.createAutoplay();
  }

  goSuivant() {
    if (this.currentImage < this.totalImage - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0;
    }
    clearInterval(this.interval);
    this.createAutoplay();
  }
  createAutoplay() {
    this.interval = setInterval(() => {
      if (this.autoplay) {
        if (this.currentImage < this.totalImage - 1) this.currentImage++;
        else this.currentImage = 0;
      }
    }, 3000);
  }
}

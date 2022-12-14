import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";

import {
  fadeIn,
  fadeOut,
  scaleIn,
  scaleOut
} from "./carousel.animations";


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: '1000ms' } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: '1000ms' } })]),
    ])
  ],
  // animations: [
  //   trigger("slideAnimation", [
  //     /* scale */
  //     transition("void => *", [useAnimation(scaleIn, { params: { time: '1000ms' } })]),
  //     transition("* => void", [useAnimation(scaleOut, { params: { time: '1000ms' } })]),
  //   ])
  // ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: any;
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}

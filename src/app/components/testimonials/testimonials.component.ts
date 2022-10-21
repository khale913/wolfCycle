import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";

import {
  fadeIn,
  fadeOut,
  scaleIn,
  scaleOut
} from "../../carousel/carousel.animations";
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  // animations: [
  //   trigger("slideAnimation", [
  //     /* scale */
  //     transition("void => *", [useAnimation(scaleIn, { params: { time: '700ms' } })]),
  //     transition("* => void", [useAnimation(scaleOut, { params: { time: '350ms' } })]),
  //   ])
  // ]
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: '800ms' } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: '600ms' } })]),
    ])
  ],
})
export class TestimonialsComponent implements OnInit {
  public slides: any = [
    {
      quote: "WolfCycle has enabled our sales & service to engage with our fanbase to set up face-to-face meetings.  The support and resources provided by their service has allowed us to become more effective and efficient in our sales process, while driving results for our organization.",
      name: "John Doe",
      company: "Buffalo Sabres",
      companyRole: "VP Sales",
      logo: "../../../assets/partners-new/Buffalo-Sabres-Logo.png"
    },
    // {
    //   quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    //   name: "Bill Murry",
    //   company: "Texas Legends",
    //   companyRole: "CEO",
    //   logo: "../../../assets/partners/Texas-Legends-01.png"
    // },
    // {
    //   quote: "Our business is booming now that wolfcycle took over!!!",
    //   name: "Bill Murry",
    //   company: "Cirque de solei",
    //   companyRole: "VP Sales",
    //   logo: "../../../assets/partners/cirque.png"
    // },

  ];

  currentSlide = 0;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.onNextClick();
      // console.log('call next click')
    }, 3000);
  }



  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    // console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    // console.log("next clicked, new current slide is: ", this.currentSlide);
    setTimeout(() => {
      this.onNextClick()
    }, 7000);
  }

}

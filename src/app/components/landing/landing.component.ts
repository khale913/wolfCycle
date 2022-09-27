import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  typedTextSpan: any;
  cursorSpan: any;
  textArray: any = ["hard", "fun", "a journey", "LIFE"];

  typingDelay: number = 200;
  erasingDelay: number = 100;
  newTextDelay: number = 2000;

  textArrayIndex: number = 0;
  charIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {

    if (this.textArray.length) {
      setTimeout(() => {
        this.type()
      }, this.newTextDelay);
    }
  }

  type() {
    this.cursorSpan = document.querySelector('.cursor');
    this.typedTextSpan = document.querySelector('.typed-text');
    console.log('type', this.typedTextSpan, this.charIndex)
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      if (!this.cursorSpan.classList.contains("typing")) {
        this.cursorSpan.classList.add("typing");
        this.typedTextSpan.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => {
          this.type()
          console.log('here')
        }, this.typingDelay);
      }
    } else {
      this.cursorSpan.classList.remove('typing');

      setTimeout(() => {
        this.erase()
      }, this.newTextDelay);
    }
  }



  erase() {
    console.log('erase');
    if (this.charIndex > 0) {

      if (!this.cursorSpan.classList.contains('typing')) {
        this.cursorSpan.classList.add('typing');
        this.typedTextSpan.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(() => {
          this.erase()
        }, this.erasingDelay);
      }

    } else {
      this.cursorSpan.classList.remove('typing');
      this.textArrayIndex++
      if (this.textArrayIndex >= this.textArray.length) {
        this.textArrayIndex = 0;

        setTimeout(() => {
          this.type()
        }, this.typingDelay + 1100);
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/SERVICE/cursor.service';
import { ActiveTabService } from 'src/app/SERVICE/active-tab.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  typedTextSpan: any;
  cursorSpan: any;
  textArray: any = ["REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.", "REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.", "REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.", "REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.", "REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.", "REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.", "REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.", "REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.", "REAL INTELLIGENCE.", "AUTOMATED EXECUTION.", "CONVERSATIONAL MARKETING.", "BETTER DATA.", "BETTER EFFICIENCY.", "BETTER MARGINS.",];
  // textArray: any = ["CONVERSATIONAL MARKETING"]

  typingDelay: number = 60;
  erasingDelay: number = 30;
  newTextDelay: number = 1800;

  textArrayIndex: number = 0;
  charIndex: number = 0;
  hover: boolean = false;
  count: any;
  constructor(private service: CursorService, private tabService: ActiveTabService) {
  }

  ngOnInit(): void {

    this.service.hover.subscribe(c => {
      this.hover = c;
    })

    this.tabService.count.subscribe(c => {
      this.count = c;
    })

    // this.service.hoverElement(true);

    if (this.textArray.length) {
      setTimeout(() => {
        this.type()
      }, 500);
    }

  }

  hoverFunction(bool: boolean) {
    this.service.hoverElement(bool);
  }


  type() {
    this.cursorSpan = document.querySelector('.cursor');
    this.typedTextSpan = document.querySelector('.typed-text');
    // console.log(this.textArrayIndex)


    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      if (!this.cursorSpan.classList.contains("typing"))
        this.cursorSpan.classList.add("typing");
      this.typedTextSpan.textContent += this.textArray[this.textArrayIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => {
        this.type()
      }, this.typingDelay);

    } else {
      this.cursorSpan.classList.remove('typing');
      setTimeout(() => {
        this.erase()
      }, this.newTextDelay);
    }
  }



  erase() {
    // console.log('erase');
    if (this.charIndex >= 0) {
      if (!this.cursorSpan.classList.contains('typing'))
        this.cursorSpan.classList.add('typing');
      this.typedTextSpan.textContent = this.textArray[this.textArrayIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => {
        this.erase()
      }, this.erasingDelay);


    } else {
      this.cursorSpan.classList.remove('typing');
      this.textArrayIndex++

      setTimeout(() => {
        this.type()
      }, this.typingDelay + 100);
      if (this.textArrayIndex >= this.textArray.length) {
        this.textArrayIndex = 0;
        console.log('reset');
        setTimeout(() => {
          this.type()
        }, this.typingDelay + 100);
      }
    }
  }

  clickedHere() {
    console.log('aclciac');
  }

}

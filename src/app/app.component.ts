import { Component, HostListener, Renderer2, ViewChild, ElementRef, Host } from '@angular/core';
import { CursorService } from './SERVICE/cursor.service';
import { ActiveTabService } from './SERVICE/active-tab.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeSection: string = 'landing';


  @ViewChild('landingDiv') landingDiv!: ElementRef;
  @ViewChild('partnerDiv') partnerDiv!: ElementRef;
  @ViewChild('testimDiv') testimDiv!: ElementRef;
  @ViewChild('serviceDiv') serviceDiv!: ElementRef;
  @ViewChild('contactDiv') contactDiv!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewPortScroll() {
    const windowHeight = window.innerHeight;
    const landingRect = this.landingDiv.nativeElement.getBoundingClientRect();
    const partnerRect = this.partnerDiv.nativeElement.getBoundingClientRect();
    const testimRect = this.testimDiv.nativeElement.getBoundingClientRect();
    const serviceRect = this.serviceDiv.nativeElement.getBoundingClientRect();
    const contactRect = this.contactDiv.nativeElement.getBoundingClientRect();


    // console.log(this.activeSection)
    if (landingRect.top >= 100) {
      this.activeSection = 'landing';
      this.tabService.nextCount(1);
    }

    if (landingRect.top <= 100 && partnerRect.top >= 80) {
      this.activeSection = 'partners';
      this.tabService.nextCount(2);
    }

    if (partnerRect.top <= 100 && testimRect.top >= 80) {
      this.activeSection = 'testimonials';
      this.tabService.nextCount(3);

    }

    if (testimRect.top <= 100 && serviceRect.top >= 50) {
      this.activeSection = 'services';
      this.tabService.nextCount(4);

    }

    if (serviceRect.top <= 100 && contactRect.top >= 50) {
      this.activeSection = 'contact';
      this.tabService.nextCount(5);

    }



  }


  title = 'wolfcycle-website';
  hover: boolean = false;
  public slides = [
    { src: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" },
    { src: "https://images.unsplash.com/photo-1568819646628-64cd7b08617e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" },
    { src: "https://images.unsplash.com/photo-1664992892797-781fcf7b7541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" },
  ];

  count: any;

  constructor(private renderer: Renderer2, private service: CursorService, private tabService: ActiveTabService) { }
  @HostListener('mousemove', ['$event'])
  mouseMove(e: MouseEvent) {
    const cursor = document.getElementById('cursor');
    this.renderer.setStyle(cursor, 'left', e.clientX + 'px');
    this.renderer.setStyle(cursor, 'top', e.clientY + 'px');
  }

  ngOnInit() {
    console.log('init');
    this.service.hover.subscribe(c => {
      this.hover = c;
    })

    this.tabService.count.subscribe(c => {
      this.count = c;
    })

  }
  cursor(e: any) {
  }

  testing() {
    console.log('demo in view')
  }
}

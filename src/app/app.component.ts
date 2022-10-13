import { Component, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { CursorService } from './SERVICE/cursor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('landingDiv', { static: false })
  private landingDiv!: ElementRef<HTMLDivElement>;
  isLandingDivScrolledIntoView!: boolean;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.landingDiv) {
      const rect = this.landingDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isLandingDivScrolledIntoView = topShown && bottomShown;
    }
  }

  title = 'wolfcycle-website';
  hover: boolean = false;
  public slides = [
    { src: "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" },
    { src: "https://images.unsplash.com/photo-1568819646628-64cd7b08617e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" },
    { src: "https://images.unsplash.com/photo-1664992892797-781fcf7b7541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60" },
  ];



  constructor(private renderer: Renderer2, private service: CursorService) { }
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
  }
  cursor(e: any) {
  }

  testing() {
    console.log('demo in view')
  }
}

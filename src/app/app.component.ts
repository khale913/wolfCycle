import { Component, HostListener, Renderer2 } from '@angular/core';
import { CursorService } from './SERVICE/cursor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wolfcycle-website';

  hover: boolean = false;
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
    console.log(e, "asdlfkasd");
  }
}

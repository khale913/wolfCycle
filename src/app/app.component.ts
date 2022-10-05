import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wolfcycle-website';


  constructor(private renderer: Renderer2) { }
  @HostListener('mousemove', ['$event'])
  mouseMove(e: MouseEvent) {
    const cursor = document.getElementById('cursor');
    this.renderer.setStyle(cursor, 'left', e.clientX + 'px');
    this.renderer.setStyle(cursor, 'top', e.clientY + 'px');
  }
  ngOnInit() {
    console.log('init')
  }
  cursor(e: any) {
    console.log(e, "asdlfkasd");
  }
}

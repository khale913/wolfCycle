import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wolfcycle-website';


  constructor() { }
  @HostListener('mousemove', ['$event'])
  mouseMove(event: MouseEvent) {
    console.log(document.getElementById('cursor'))
    const curs = document.querySelector('cursor');

  }
  ngOnInit() {
    console.log('init')
  }
  cursor(e: any) {
    console.log(e, "asdlfkasd");
  }
}

import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/SERVICE/cursor.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  hover: boolean = false;
  constructor(private service: CursorService) { }

  ngOnInit(): void {
    this.service.hover.subscribe(c => {
      this.hover = c;
    })
  }

  hoverFunction(bool: boolean) {
    this.service.hoverElement(bool);
  }

}

import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/SERVICE/cursor.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  hover: boolean = false;
  inputs: any = {
    name: '',
    subject: '',
    email: '',
    phone: '',
  };
  disableBtn: boolean = true;
  constructor(private service: CursorService) { }

  ngOnInit(): void {
    this.service.hover.subscribe(c => {
      this.hover = c;
    })
  }

  formInput() {
    console.log(this.inputs.name)
    if (this.inputs.name.length > 0 && this.inputs.email.length > 0 && this.inputs.name !== '' && this.inputs.email !== '' || this.inputs.name.length > 0 && this.inputs.phone.length > 0) {
      this.disableBtn = false;
    } else {
      this.disableBtn = true;
    }
  }

  hoverFunction(bool: boolean) {
    this.service.hoverElement(bool);
  }

}

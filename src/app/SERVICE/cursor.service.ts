import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CursorService {

  hoverer: boolean = false;
  hover: BehaviorSubject<boolean>;

  constructor() {
    this.hover = new BehaviorSubject(this.hoverer);
  }

  // nextCount(num: any) {
  //   this.count.next(num);
  //   console.log(num)
  // }

  hoverElement(bool: boolean) {
    this.hover.next(bool);
    // console.log(bool)
  }

}

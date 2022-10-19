import { Component, OnInit } from '@angular/core';
import { CursorService } from 'src/app/SERVICE/cursor.service';
import { ActiveTabService } from 'src/app/SERVICE/active-tab.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeTab: string = 'home';
  navOpen: boolean = false;
  hover: boolean = false;
  count: any;
  constructor(private service: CursorService, private tabService: ActiveTabService) { }

  ngOnInit(): void {
    this.service.hover.subscribe(c => {
      this.hover = c;
    })
    this.tabService.count.subscribe(c => {
      this.count = c;
    })
  }

  hoverFunction(bool: boolean) {
    this.service.hoverElement(bool);
  }

  navigateSection(section: string) {
    this.activeTab = section;
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    console.log(section);
    this.navOpen = false;
  }

  operateNav() {
    console.log('open nav')
    // document.getElementById("mySidenav").style.width = "250px";
    this.navOpen = !this.navOpen;
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeTab: string = 'home';
  constructor() { }

  ngOnInit(): void {
  }

  navigateSection(section: string) {
    this.activeTab = section;
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });

  }

}

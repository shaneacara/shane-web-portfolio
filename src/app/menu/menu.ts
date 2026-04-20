import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  showLinks = false;

  toggleLinks() {
    if (this.showLinks) {
      this.showLinks = false;
    } else {
      this.showLinks = true;
    }
  }
}

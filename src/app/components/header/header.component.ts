import { Component, OnInit } from '@angular/core';
import Button from 'src/app/models/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public buttons: Button[] = [];

  constructor() {
    this.buttons = [
      {
        text: 'New Storage',
        icon: 'add',
        url: '/new-storage',
      },
      {
        text: 'New Item',
        icon: 'add',
        url: '/new-item',
      },
    ];
  }

  ngOnInit(): void {}
}

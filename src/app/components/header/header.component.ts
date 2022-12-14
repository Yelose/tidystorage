import { Component, OnInit } from '@angular/core';
import Button from 'src/app/models/buttonModel';

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
        text: 'New Item',
        icon: 'add',
        url: '/item/0',
      },
    ];
  }

  ngOnInit(): void {}
}

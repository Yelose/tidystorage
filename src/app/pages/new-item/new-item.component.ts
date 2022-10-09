import { Component, OnInit } from '@angular/core';
import FormFieldModel from 'src/app/models/formFieldModel';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit {
  public fields: FormFieldModel[] = [];

  constructor() {
    this.fields = [
      {
        label: 'new storage room',
        select: 'select room',
        options: [
          { name: 'new' },
          { name: 'Garage' },
          { name: 'Storage Room' },
          { name: 'Kitchen' },
        ],
      },
      {
        label: 'new shelving',
        select: 'select a shelving',
        options: [
          { name: 'new' },
          { name: 'Left' },
          { name: 'Front Left' },
          { name: 'Front Middle' },
          { name: 'Front Right' },
          { name: 'Right' },
        ],
      },
      {
        label: 'new shelf',
        select: 'select a shelf',
        options: [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }],
      },
      {
        label: 'create position',
        select: 'select position',
        options: [
          { name: 'new' },
          { name: 'Top' },
          { name: 'Front' },
          { name: 'Back' },
          { name: 'Bottom' },
        ],
      },
      {
        label: 'new box or bag',
        select: 'select box',
        options: [
          { name: 'new' },
          { name: 'A box' },
          { name: 'Plastic Bag' },
          { name: 'Hand bag' },
          { name: 'Little box' },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}

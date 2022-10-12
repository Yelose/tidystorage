import { Component, OnInit } from '@angular/core';
import FormFieldModel from 'src/app/models/formFieldModel';
import Item from 'src/app/models/itemModel';
import Storage from 'src/app/models/storageModel';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit {
  public fields: FormFieldModel[] = [];
  public items: Item[];

  public rooms: Storage[];
  public shelvings: Storage[];
  public sections: Storage[];
  public positions: Storage[];
  public boxes: Storage[];

  public options: Array<any>;

  constructor(private service: MainService) {
    this.rooms = [];
    this.shelvings = [];
    this.sections = [];
    this.positions = [];
    this.boxes = [];

    this.fields = [
      {
        label: 'new storage room',
        select: 'select room',
        options: [this.rooms],
      },
      {
        label: 'new shelving',
        select: 'select a shelving',
        options: [this.shelvings],
      },
      {
        label: 'new shelf',
        select: 'select a shelf',
        options: [this.sections],
      },
      {
        label: 'create position',
        select: 'select position',
        options: [this.positions],
      },
      {
        label: 'new box or bag',
        select: 'select box',
        options: [this.boxes],
      },
    ];
  }

  async ngOnInit(): Promise<void> {
    this.items = await this.service.item.GetItems();
    this.rooms = await this.service.room.GetRooms();
    this.shelvings = await this.service.shelving.GetShelvings();
    this.sections = await this.service.section.GetSections();
    this.positions = await this.service.position.GetPositions();
    this.boxes = await this.service.box.GetBoxes();
  }
}

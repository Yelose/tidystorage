import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import FormFieldModel from 'src/app/models/formFieldModel';
import Item from 'src/app/models/itemModel';
import Storage from 'src/app/models/storageModel';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  public fields: FormFieldModel[] = [];

  public item: Item;
  public rooms: Storage[];
  public shelvings: Storage[];
  public sections: Storage[];
  public positions: Storage[];
  public boxes: Storage[];

  constructor(
    private service: MainService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.item = new Item();
    this.item.id = 0;
  }

  async save(): Promise<void> {
    if (this.item.id === 0) {
      await this.service.item.CreateItem(this.item);
    } else {
      await this.service.item.UpdateItem(this.item);
    }
    this.router.navigate(['home']);
  }

  async ngOnInit(): Promise<void> {
    this.rooms = await this.service.room.GetRooms();
    this.shelvings = await this.service.shelving.GetShelvings();
    this.sections = await this.service.section.GetSections();
    this.positions = await this.service.position.GetPositions();
    this.boxes = await this.service.box.GetBoxes();

    let id = this.route.snapshot.params['id'];

    if (id != 0) {
      this.item = await this.service.item.GetItem(id);
    }
  }

  public changeRoom(e: Storage) {
    this.item.room = e.name;
  }
}

import { Component, OnInit } from '@angular/core';
import Item from 'src/app/models/itemModel';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public items: Item[];

  columnsToDisplay = ['name', 'room', 'shelving', 'section', 'position', 'box'];

  constructor(private service: MainService) {}

  async ngOnInit(): Promise<void> {
    await this.reload();
  }

  async delete(id: number): Promise<void> {
    await this.service.item.DeleteItem(id);
    await this.reload();
  }
  async reload(): Promise<void> {
    this.items = await this.service.item.GetItems();
  }
}

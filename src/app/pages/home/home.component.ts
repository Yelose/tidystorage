import { AfterViewInit, Component } from '@angular/core';
import Item from 'src/app/models/itemModel';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public items: Item[];

  public displayedColumns: string[] = [
    'name',
    'room',
    'shelving',
    'section',
    'position',
    'box',
  ];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  constructor(private service: MainService) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

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

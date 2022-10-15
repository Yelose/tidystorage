import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import Item from 'src/app/models/itemModel';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public items: Item[];
  public searchText: string;
  public timeOutSearch: NodeJS.Timeout;
  public displayedColumns: string[] = [
    'name',
    'room',
    'shelving',
    'section',
    'position',
    'box',
  ];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
  constructor(private service: MainService, private router: Router) {}
  async ngAfterViewInit(): Promise<void> {
    await this.reload();
  }

  async edit(id: number): Promise<void> {
    this.router.navigate([`/item/${id}`]);
  }

  async delete(id: number): Promise<void> {
    await this.service.item.DeleteItem(id);
    await this.reload();
  }
  async reload(): Promise<void> {
    if (this.searchText) {
      this.items = await this.service.item.SearchItems(this.searchText);
    } else {
      this.items = await this.service.item.GetItems();
    }
  }

  search(): void {
    if (this.timeOutSearch != null) {
      clearTimeout(this.timeOutSearch);
    }
    this.timeOutSearch = setTimeout(() => {
      this.reload();
    }, 300);
  }
}

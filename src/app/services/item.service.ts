import { Injectable } from '@angular/core';
import Item from '../models/itemModel';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public service: MainService;

  public async GetItems(): Promise<Item[]> {
    return await this.service.HttpGet('/items');
  }

  public async SearchItems(text: string): Promise<Item[]> {
    return await this.service.HttpGet(`/search/${encodeURIComponent(text)}`);
  }
  public async GetItem(id: number): Promise<Item> {
    return await this.service.HttpGet(`/items/${id}`);
  }

  public async CreateItem(item: Item): Promise<Item> {
    return await this.service.HttpPost('/items', item);
  }

  public async UpdateItem(item: Item): Promise<Item> {
    return await this.service.HttpPut(`/items/${item.id}`, item);
  }

  public async DeleteItem(id: number): Promise<{ message: string }> {
    return await this.service.HttpDelete(`/items/${id}`);
  }

  constructor() {}
}

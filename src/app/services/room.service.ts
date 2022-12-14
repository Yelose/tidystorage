import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import Storage from '../models/storageModel';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  public service: MainService;

  public async GetRooms(): Promise<Storage[]> {
    return await this.service.HttpGet('/rooms');
  }

  constructor() {}
}

import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import Storage from '../models/storageModel';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  public service: MainService;

  public async GetSections(): Promise<Storage[]> {
    return await this.service.HttpGet('/sections');
  }

  constructor() {}
}

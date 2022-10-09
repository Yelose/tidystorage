import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss'],
})
export class EditItemComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: ItemService) {}

  async getItem(id: number): Promise<void> {
    await this.service.GetItem(id);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      if (id) {
        this.getItem(id);
      }
    });
  }
}

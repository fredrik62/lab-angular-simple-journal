import { Component, OnInit } from '@angular/core';
import { EntryListService } from '../../services/entry-list.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
list: Array<any>;
  constructor(private entryListService: EntryListService) { }

  ngOnInit() {
    this.entryListService.listAll()
    .then((data) => {
     this.list = data;
     console.log(data)
    });

  }

}

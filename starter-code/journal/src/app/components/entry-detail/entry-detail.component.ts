import { Component, OnInit } from '@angular/core';
import { EntryListService } from '../../services/entry-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  entry: Object = {};
  constructor(private entryListService: EntryListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.entryListService.getOne(params.id)
          .then(data => this.entry = data);
      });

  }

}

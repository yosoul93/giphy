import { Component, Input, OnInit } from '@angular/core';
import { SearchData } from '../search.model';

@Component({
  selector: 'app-search-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class SearchListComponent implements OnInit {

  @Input() public searchList: SearchData[];
  constructor() { }

  ngOnInit(): void {
  }

}

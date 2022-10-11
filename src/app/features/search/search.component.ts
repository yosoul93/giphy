import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SearchService } from './search.service';
import { FormControl } from '@angular/forms';
import { debounceTime, takeUntil, switchMap, map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { SearchPagination, SearchData } from './search.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy, AfterViewInit {
  
  @ViewChild(MatPaginator) private readonly _paginator: MatPaginator;

  public isLoading: boolean = false;
  public pageLimit: number; 
  public pagination: SearchPagination;
  public searchData$: Observable<SearchData[]>;
  public readonly searchInputControl: FormControl = new FormControl();

  private searchedQuery: string;
  private readonly _unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private readonly _searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.pageLimit = this._searchService.PAGE_LIMIT;
    
    this._searchService.pagination$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((pagination: SearchPagination) => {
        this.pagination = pagination;
      });

    this.searchData$ = this._searchService.searchData$;

    this.searchInputControl.valueChanges
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(300),
        switchMap((query) => {
          this.searchedQuery = query;
          this.isLoading = true;
          return this._searchService.getSearchData({
            q: query,
            offset: 0
          });
        }),
        map(() => {
          this.isLoading = false;
        })
      )
      .subscribe();
  }
  
  ngAfterViewInit(): void {
    this._paginator.page.pipe(
      switchMap(() => {
        this.isLoading = true;
        const offset = this._paginator.pageIndex*this.pageLimit;
        return this._searchService.getSearchData({
          q: this.searchedQuery,
          offset: offset
        });
      }),
      map(() => {
       this.isLoading = false;
      })
    )
    .subscribe();
  }

  ngOnDestroy(): void{
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}

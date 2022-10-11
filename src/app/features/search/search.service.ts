import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SearchParams, SearchPagination, SearchData } from './search.model';

@Injectable()

export class SearchService {

  public readonly PAGE_LIMIT: number = 9;
  private readonly _pagination: BehaviorSubject<SearchPagination | null> =  new BehaviorSubject(null);
  private readonly _searchData: BehaviorSubject<SearchData[] | null> =  new BehaviorSubject(null);

  constructor(
    private readonly _httpClient: HttpClient
  ) {}
  
  get pagination$(): Observable<SearchPagination> {
    return this._pagination.asObservable();
  }

  get searchData$(): Observable<SearchData[]> { 
    return this._searchData.asObservable();
  }

  getSearchData(option: {q: string, offset: number}):
    Observable<{ 
      data: SearchData[]; 
      pagination: SearchPagination
    }> 
  {
    const url = `${environment.url}/gifs/search`;
    const param: SearchParams = {
      q: option.q,
      limit: this.PAGE_LIMIT,
      offset: option.offset,
      api_key: environment.apiKey
    }
    return this._httpClient.get<{ 
      data: SearchData[]; 
      pagination: SearchPagination 
    }>
    (url, { params: param})
    .pipe(
      tap((response) => {
        this._pagination.next(response.pagination);
        this._searchData.next(response.data);
      })
    );
  }
  
}
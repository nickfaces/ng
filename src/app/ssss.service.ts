import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, takeUntil} from "rxjs";
import {Bla} from "./interfaces/bla";

@Injectable({
  providedIn: 'root'
})
export class SsssService {
  destroy$ = new Subject();
  constructor(private http: HttpClient) { }

  ttt(): Observable<Bla> {
    return this.http.get<Bla>('http://localhost:8000/api/categories', )
      .pipe(
        takeUntil(this.destroy$),
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

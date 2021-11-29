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

  ttt(): Observable<Bla[]> {
    return this.http.get<Bla[]>('http://127.0.0.1:8000/api/todo', )
      .pipe(
        takeUntil(this.destroy$),
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}

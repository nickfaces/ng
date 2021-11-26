import {Component, OnDestroy} from '@angular/core';
import {timeout} from "rxjs";
import {SsssService} from "./ssss.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'Chalet';
  inputValue = '';

  constructor(public service: SsssService) {
    service.ttt().subscribe()
  }

  ngOnDestroy(): void {
    this.service.destroy$.next(true);
    this.service.destroy$.complete();
  }

  onInput(event: any) {
    console.log('Event', event)
    this.inputValue = event.target.value
  }

}


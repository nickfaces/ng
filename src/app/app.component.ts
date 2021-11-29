import {Component, OnDestroy} from '@angular/core';
import {timeout} from "rxjs";
import {SsssService} from "./ssss.service";
import {Bla} from "./interfaces/bla";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'Chalet';
  inputValue = '';
  bla: Bla[] = []
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

  onClick(){
    this.service.ttt().subscribe(response => {
      this.bla = response
      this.inputValue = JSON.stringify(this.bla)
    })
    console.log('Click', this.bla)
  }

}


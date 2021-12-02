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
  email = '';
  password = '';
  bla: Bla[] = []
  constructor(public service: SsssService) {
    service.ttt().subscribe()
  }

  ngOnDestroy(): void {
    this.service.destroy$.next(true);
    this.service.destroy$.complete();
  }

  onInput(event: any) {
    console.log('E-mail', event)
    this.email = event.target.value
  }

  inputPassword(event: any) {
    console.log('Password', event)
    this.password = event.target.value
  }


  onClick(){
    this.service.ttt().subscribe(response => {
      this.bla = response
      this.email = JSON.stringify(this.bla)
    })
    console.log('Click', this.bla)
  }

}


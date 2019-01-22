import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { INCREMENT } from '../actions';


@Component({
  selector: 'app-redux-example',
  templateUrl: './redux-example.component.html',
  styleUrls: ['./redux-example.component.css']
})
export class ReduxExampleComponent implements OnInit {

  @select(s => s.counting.counter) counter;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
  }

  increment(){
    this.ngRedux.dispatch({ type: INCREMENT })
  }

}

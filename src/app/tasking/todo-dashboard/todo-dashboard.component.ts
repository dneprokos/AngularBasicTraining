import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { CLEAR_TODOS } from '../actions';


@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {

  @select(s => s.tasking.todos) todos; 
  @select(s => s.tasking.lastUpdate) lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }

}

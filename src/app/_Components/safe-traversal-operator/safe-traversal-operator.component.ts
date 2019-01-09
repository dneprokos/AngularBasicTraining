import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-traversal-operator',
  templateUrl: './safe-traversal-operator.component.html',
  styleUrls: ['./safe-traversal-operator.component.css']
})
export class SafeTraversalOperatorComponent {
  task = {
    title: 'Review applications',
    assignee:{
      name: 'John Smith'
    }
  }
  

}

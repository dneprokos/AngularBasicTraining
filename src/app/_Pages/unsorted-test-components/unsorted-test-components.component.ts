import { Component } from '@angular/core';

@Component({
  selector: 'app-unsorted-test-components',
  templateUrl: './unsorted-test-components.component.html',
  styleUrls: ['./unsorted-test-components.component.css']
})
export class UnsortedTestComponentsComponent {

  title = 'angular-world-app';

  trackVideo(index, vid){
    return vid ? vid.id : undefined;
  }
}

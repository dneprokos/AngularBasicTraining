import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/_Services/authors.service';

@Component({
  selector: 'app-authors',
  template: `
  <h2>{{ getTitle() }}</h2>
  <ul>
      <li *ngFor="let author of authors">
          {{ author }}
      </li>
  </ul>
  `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  private title = "List of authors";

  getTitle(){
    return this.title;
  }

  authors: string[];

  constructor(service: AuthorsService) {
      this.authors = service.getAuthors();
   }
}

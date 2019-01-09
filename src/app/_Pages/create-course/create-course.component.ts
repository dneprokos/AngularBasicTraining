import { Component } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {

  courseCategories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ]

  submit(course){
    console.log(course);
  }

}

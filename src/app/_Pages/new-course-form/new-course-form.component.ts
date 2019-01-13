import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate, keyframes, useAnimation, animation, query, animateChild, group, stagger } from '@angular/animations';
import { bounceOutLeftAnimation, fadeInAnimation } from 'src/app/_Animations/animations';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h2', [
            style({ transform: 'translateY(-20px)' }),
            animate(1000)
          ], { optional: true }),
          query('@todoAnimation',
            //stagger is used to apply animation delay for each of the items list 
            stagger(300, animateChild())
          ) 
        ])        
      ]
      )
    ]),
    //Find implementation in animations module we have created. 
    trigger('todoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          //Overriding one of default parameters 
          params: {
            duration: '2s'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class NewCourseFormComponent implements OnInit {
  
  form = new FormGroup({
    topics: new FormArray([])
  })

  ngOnInit(){
    this.initTopics(3);       
  }
  
  initTopics(count: number){
    for(let num = 1; num <= count; num++){
      console.log(num);
      this.topics.push(new FormControl('Task ' + num));
    }
  }

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  animationStarted($event){ console.log($event); }

  animationDone($event){ console.log($event); }
}

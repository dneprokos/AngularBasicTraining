import { Component } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2>{{"Title:" + getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    <input (keyup.enter)="onKeyUp($event)" />
    <input #email (keyup.enter)="onValueEntered(email.value)" />
    <input [(ngModel)]="emailField" (keyup.enter)="onEmailFieldEntered()" />
    <div (click)="onDivClicked()">
    <button 
    class="btn btn-primary" 
    [class.active]="isActive"
    [style.backgoundColor]="isActive ? 'blue' : 'white'"
    (click)="onSave($event)"
    >Save</button>
    </div>
    <h2>Using pipes and custom pipes</h2>
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'1.2-2' }} <br/>
    {{ course.price | currency:'EUR':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }} <br/>
    {{ text | summary:10 }} 
    `
})
export class CoursesComponent{
    private title = "Using template murckup and data stubs.";
    getTitle(){
        return this.title;
    }
    isActive = true;
    emailField = "me@example.com";
    courses: string [];

    course = {
        title: "Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2018, 12, 26)
    }

    text = `Those an equal point no years do. Depend warmth fat but her but played. Shy and subjects wondered trifling pleasant. Prudent cordial comfort do no on colonel as assured chicken. Smart mrs day which begin. Snug do sold mr it if such. Terminated uncommonly at at estimating. Man behaviour met moonlight extremity acuteness direction. 

    Surprise steepest recurred landlord mr wandered amounted of. Continuing devonshire but considered its. Rose past oh shew roof is song neat. Do depend better praise do friend garden an wonder to. Intention age nay otherwise but breakfast. Around garden beyond to extent by. 
    
    Civility vicinity graceful is it at. Improve up at to on mention perhaps raising. Way building not get formerly her peculiar. Up uncommonly prosperous sentiments simplicity acceptance to so. Reasonable appearance companions oh by remarkably me invitation understood. Pursuit elderly ask perhaps all. 
    
    Unfeeling so rapturous discovery he exquisite. Reasonably so middletons or impression by terminated. Old pleasure required removing elegance him had. Down she bore sing saw calm high. Of an or game gate west face shed. ﻿no great but music too old found arose. 
    
    Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton. 
    
    Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she. 
    
    Was certainty remaining engrossed applauded sir how discovery.`; 

    

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onSave($event){
        //Event will not be bubleup
        $event.stopPropagation();
        
        this.isActive ? this.isActive = false : this.isActive = true;
        console.log('Save button was clicked and isActive: ' + this.isActive, $event);
    }

    onDivClicked(){
        console.log('Div was clicked');
    }

    onKeyUp($event = null){
        //We don't need to pass event and check if code === 13 because
        //we already have (keyup.enter). I just left it for example. 
        if ($event !== null && $event.keyCode === 13){
            console.log("Enter was pressed");
            console.log("$event.target.value");    
        }               
    }

    //Oldschool approach
    onValueEntered(email){
        console.log(email);
    }

    //Modern approach
    onEmailFieldEntered(){
        console.log(this.emailField);
    }
}
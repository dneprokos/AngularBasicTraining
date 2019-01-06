import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  videos = [
    {id: 1, name: 'video1'},
    {id: 2, name: 'video2'},
    {id: 3, name: 'video3'}
  ]

  onAddVideo(){
    let newId = this.videos[this.videos.length-1].id + 1;
    this.videos.push({ id: newId, name: 'video' + newId})
 }

 onRemoveVideo(vid){
   let index = this.videos.indexOf(vid);
   this.videos.splice(index, 1);
 }

}

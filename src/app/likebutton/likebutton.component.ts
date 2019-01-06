import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-likebutton',
  templateUrl: './likebutton.component.html',
  styleUrls: ['./likebutton.component.css']
})
export class LikebuttonComponent {

  @Input('likesCount') likesCount: number;
  @Input('isLiked') isLiked: boolean;


  onLikeClick(){
    this.likesCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
  }
}

export interface LikeChangeEvent{
  isLiked: boolean
}

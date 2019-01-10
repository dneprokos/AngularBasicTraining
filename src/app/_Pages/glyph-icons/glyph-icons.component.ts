import { Component } from '@angular/core';
import { FavoriteChangeEvent } from 'src/app/_Components/favorite/favorite.component';

@Component({
  selector: 'app-glyph-icons',
  templateUrl: './glyph-icons.component.html',
  styleUrls: ['./glyph-icons.component.css']
})
export class GlyphIconsComponent {

  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 10
  }

  onFavoriteChange(eventArgs: FavoriteChangeEvent){
    console.log("Favorite was changed: ", eventArgs);
  }

}

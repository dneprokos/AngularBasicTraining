import { Component, OnInit} from '@angular/core';
import { PostService } from 'src/app/_Services/post.service';
import { AppError } from 'src/app/_Components/common/app-error';
import { BadRequestError } from 'src/app/_Components/common/bad-request-error';
import { NotFoundError } from 'src/app/_Components/common/not-found-error';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    //Second parameter is optional. I just added it to show how to receive full response.
    this.service
    .getAll()
    .subscribe(response => this.posts = response.body);
  }

  createPost(input: HTMLInputElement){
    //Create fake post. Used optimistic update.
    let post = {title: input.value};
    this.posts.splice(0, 0, post);

    input.value = '';

    //Post fake post and add it to the beggining of posts list
    this.service
    .create(post)
    .subscribe(
      newPost => {
        console.log(newPost);         
    }, 
      (error: AppError ) => {
        //Post should be removed in case if something went worng on server(optimistic update)
        this.posts.splice(0, 1);

        if (error instanceof BadRequestError) 
          alert('Bad request');
        else throw error;    
    })
  }

  updatePost(post){
    this.service
    .update(post)
    .subscribe(response => console.log(response)
    );
  }

  deletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
    .subscribe(
      null, 
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError)
          alert('This post has already been deleted');
        else throw error;
    })
  }
}

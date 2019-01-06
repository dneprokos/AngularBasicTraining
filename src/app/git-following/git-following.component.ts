import { Component, OnInit } from '@angular/core';
import { GitFollowingService } from '../services/git-following.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs/';

@Component({
  selector: 'app-git-following',
  templateUrl: './git-following.component.html',
  styleUrls: ['./git-following.component.css']
})
export class GitFollowingComponent implements OnInit {
  following: any;

  constructor(
    private route: ActivatedRoute,
    private service: GitFollowingService) { }

  ngOnInit(): void {
    let obs = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    obs.subscribe(combined =>{
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      //this.service.getAll({id: id, page: page})
      //We can pass optional parameters. e.g. some filters 
      this.service
      .getAll()
      .subscribe(response => this.following = response.body);
    })   
  }
}

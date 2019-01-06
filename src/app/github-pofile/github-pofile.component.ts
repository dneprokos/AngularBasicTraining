import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-pofile',
  templateUrl: './github-pofile.component.html',
  styleUrls: ['./github-pofile.component.css']
})
export class GithubPofileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

    submit() {
      this.router.navigate(['/following'], {
        queryParams: { page: 1, order: 'newest' }
      })
    }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params =>{
      let name = params.get('name');
      console.log(name);
    })
  }

}

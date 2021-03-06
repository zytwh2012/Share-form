import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PostDetailService } from './post-detail.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, AfterViewInit {

  public postId: String;
  public post = null;
  // isPullable is to tack if more comments exits
  private isPullable: Boolean;

  constructor(private router: Router,
              private location: Location,
              private postDetailService: PostDetailService) { }

  ngOnInit() {
    // get postId by chop and extract last component in url
    this.postId = this.location.path().split('/').pop();
    // get post detail json information from service
    this.postDetailService.getPostById(this.postId).subscribe(
      data => {
        if (data) {
          this.post = data;
        } else {
          // unable to find post, redirect to 404
          this.router.navigate(['404']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  ngAfterViewInit() {
    // present post-detail
    // console.log(this.post);
    // document.getElementsByTagName('p').item(0).innerText = JSON.stringify(this.post);
  }
  redirectByBranch() {
    this.router.navigate([this.post.branch.toLowerCase()]);
  }
}

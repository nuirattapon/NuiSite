import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//import { MarkdownComponent } from 'angular2-markdown';

import { BlogService } from '../blog.service';
import { AuthenService } from '../../authen.service';
import { Post, IPost } from '../Post';





@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['../blog.component.css']
})
export class PostListComponent implements OnInit {
  //markdown1: string;
  blogUrl = 'https://nuirattapon.com/blog/';

  constructor(
    public blogService: BlogService,
    private _pageTitle: Title,
    public afAuth: AngularFireAuth,
    public authenService: AuthenService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._pageTitle.setTitle('Blog - Nui Rattapon');
    if(this.blogService.posts == null || this.blogService.posts.length <= 1){
      this.blogService.getPosts();
    }
    
  }

  deletePost(id: number) {
    this.blogService.deletePost(id);
  }

  goToNewpost() {
    this._router.navigate(['/blog/0/edit']);
  }

  editPost(post: Post){
    this._router.navigate(['/blog',post.id,'edit']);
  }

}

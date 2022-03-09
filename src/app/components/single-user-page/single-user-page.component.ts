import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { User } from 'src/app/model/user';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-single-user-page',
  templateUrl: './single-user-page.component.html',
  styleUrls: ['./single-user-page.component.scss']
})
export class SingleUserPageComponent implements OnInit {

  singleUser?: User;
  postList?: Post[];
  userId:number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private conServ: DataServiceService, private route: ActivatedRoute) { 
    this.conServ.getUser(this.userId).subscribe((user) => {
      this.singleUser = user;
    });
  }

  ngOnInit(): void {
    this.conServ.getUser(this.userId).subscribe((user) => {
      this.singleUser = user;
    });
  }

  loadPosts(){
    this.conServ.getPostsbyUserId(this.userId).subscribe((posts) => (this.postList = posts));
  }

}

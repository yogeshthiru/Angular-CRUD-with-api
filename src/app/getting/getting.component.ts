import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { UserFetch } from '../user-fetch';
import { Users } from '../users';

@Component({
  selector: 'app-getting',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.css']
})
export class GettingComponent implements OnInit {

  constructor(public route:ActivatedRoute,public router:Router,public rs:RestService) { }
  val:any;
  users:Users[]= [];
  user:UserFetch;
  ngOnInit(){
    let sub=this.route.params.subscribe(params=>{
      this.val=params['id'];
    });
    console.log("id :"+this.val);
    this.rs.getUpdateUser(this.val).subscribe(data=>{
      this.user=data;
    });
  }


}

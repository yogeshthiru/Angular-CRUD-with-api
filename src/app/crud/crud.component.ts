import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { UserFetch } from '../user-fetch';
import { Users } from '../users';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

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

  update(){
    this.rs.updateUser(this.user).subscribe(data=>{
    });
    this.getUsers();
    this.router.navigate(['rest']);
  }
  getUsers(){
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  users:Users[]=[];
  firstName:any;
  p:number=1;
  constructor(public rs:RestService,private router:Router) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    });
  }
  Search(){
    if(this.firstName == "")
    {
      this.ngOnInit();
    }
    else{
      this.users = this.users.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }
  key:string='id';
  reverse:boolean=false;
  sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }

  deleteRow(val){
    if(confirm("Are you sure to delete? ")){
        this.rs.deleteUser(val).subscribe(data=>{
        });
        this.rs.getUsers().subscribe((response)=>{
          this.users=response;
        });
    }
  }

  update(id){
    this.router.navigate(['/update',id]);
  }

}

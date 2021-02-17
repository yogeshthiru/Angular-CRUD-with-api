import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addvalues',
  templateUrl: './addvalues.component.html',
  styleUrls: ['./addvalues.component.css']
})
export class AddvaluesComponent implements OnInit {

  value:string;
  constructor(private http:HttpClient,public router:Router) { }
  url:string ="http://localhost:3000/Users";


  getval(){
    this.value="1";
    this.router.navigate(['/get',this.value])
  }


  onSubmit(data){
    this.http.post(this.url,data)
    .subscribe((result)=>{
      console.log(result);
    })
    console.log(data);
  }
 
  ngOnInit(): void {
  }


 

}

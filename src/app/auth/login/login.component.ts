import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router , private data : DataService) { }
 loginUserData = {

  email :"" , 
  password : "",
  slug: "red-shoe"
 } 
  ngOnInit(): void {
  }

  loginUsser(){
    this.data.loginUser(this.loginUserData).subscribe(
      (res)=>{
        console.log(res);
        this.router.navigate(['/home']);
         
      } , 
      (err) =>{
      console.log(err) ; 
      }
    )
  }

  goToSignup() {
    this.router.navigate(["/signup"]) 
}

goToHome() {
  this.router.navigate(["/home"]) 
}


}

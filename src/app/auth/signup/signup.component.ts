import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router : Router , private data : DataService) { }
  user={
    username : '',
    email : '' ,
    password : ''
  }

  ngOnInit(): void {
  }
  goToLogin() {
    this.router.navigate(["/signup"]) 
}

ajout(){
 console.log("123")
  this.data.ajoutUser(this.user).subscribe(
    (res)=>{
      console.log(res);
      this.router.navigate(['/login']); 
    } , 
    (err) =>{
    console.log(err) ; 
    }
  )

   



}

}

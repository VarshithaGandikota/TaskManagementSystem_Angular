import { HttpClient } from '@angular/common/http';
import { Component,inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule,  RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  // template: `<a (click)="goToSignUp()">Go to About </a>`,
  styleUrl: './login.component.css'
})


export class LoginComponent {
  loginObj: any = {
    "email": "",
    "password": ""
  };

  constructor(private router : Router){
    
  }

  http=inject(HttpClient);

  onLogin(){
    // debugger;
    this.http.post(`http://localhost:8080/api/users/login-by-email?email=${this.loginObj.email}&password=${this.loginObj.password}`,this.loginObj).subscribe((res:any)=>{
      if(res.username) {
          // alert("login successfull"+res.username);
          this.router.navigate(['dashboard']);
      }else{
        alert(res.message)
      }
  })
  }

  // goToSignUp(): void {
  //   this.router.navigate(['/signup']);
  // }
}

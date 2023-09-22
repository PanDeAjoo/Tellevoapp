import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  usuario:string='';
  password:string='';

  constructor(private router: Router, private toastCtrl:ToastController) { }

  ngOnInit() {
  }
  
  async irMenu(){
    if (this.usuario=="cris" && this.password=="cris") {
        this.router.navigate(['/home']);

    }else if(this.usuario=="fran" && this.password=="fran") {
        this.router.navigate(['/homeconductor']);

    }else{
        let m = this.toastCtrl.create({
          message:"usuario y password incorrecta",
          duration:3000,
          position:'middle'
        });
         (await m).present();
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  nodeMailerForm : FormGroup;
  constructor(private emailService:EmailService){}

  ngOnInit(){

  }

  sendMail(){
    let reqObj = {
      email:'audeveloper507@gmail.com'
    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })
  }


}

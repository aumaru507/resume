import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  nodeMailerForm : FormGroup;



  constructor(private formBuilder:FormBuilder,private emailService:EmailService){
    this.nodeMailerForm = new FormGroup({
      UserFirstName: new FormControl(''),
      UserLastName: new FormControl(''),
      UserEmail: new FormControl(''),
      UserPhone: new FormControl(''),
      UserMessage: new FormControl('')
    });
  }

  ngOnInit(){
      console.log(this.nodeMailerForm.value);
  }
  onSubmit(formValue){
    console.log(formValue)
  }
  sendMail(){
    let reqObj = {
      email:'setthanan507@gmail.com',
      UserFirstName: this.nodeMailerForm.value.UserFirstName,
      UserLastName: this.nodeMailerForm.value.UserLastName,
      UserEmail: this.nodeMailerForm.value.UserEmail,
      UserPhone: this.nodeMailerForm.value.UserPhone,
      UserMessage: this.nodeMailerForm.value.UserMessage

    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })

  }



}

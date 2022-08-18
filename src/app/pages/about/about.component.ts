import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    myScriptElement: HTMLScriptElement;
    myScriptElement1: HTMLScriptElement;

  constructor() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src="src/assets/js/main.js";
    document.body.appendChild(this.myScriptElement);

    this.myScriptElement1 = document.createElement("script");
    this.myScriptElement1.src="src/assets/js/swiper-bundle.min.js";
    document.body.appendChild(this.myScriptElement1);
  }

  ngOnInit(): void {

  }

}

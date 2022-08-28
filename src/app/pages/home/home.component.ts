import { Component, OnInit } from '@angular/core';
import {OrderDetailsService} from 'src/app/servicess/order-details.service';
import Typewriter from 't-writer.js';
import  AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  constructor( private service:OrderDetailsService) { }

  foodData:any;
  ngOnInit(): void{
    AOS.init({
      delay: 500,
    });
    this.foodData = this.service.foodDetails;
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#0A6C8B'
    })

    writer
      .type('I Love to Develop.')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(18)
      .type('I Love to Design.')
      .rest(500)
      .remove(17)
      .type('A Developer')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(11)
      .type('A Web Designer')
      .rest(500)
      .clear()
      .start()

  }
}

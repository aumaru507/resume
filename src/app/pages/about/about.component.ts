import { Component, OnInit } from '@angular/core';
import  AOS from 'aos';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    AOS.init({
      delay: 500,
    });
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

import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'CornflowerBlue'
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
      .changeOps({ deleteSpeed: 20 })
      .remove(11)
      .type('A Web Designer')
      .rest(500)
      .clear()
      .start()
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     this.chargerScript();
  }

  chargerScript() {
    const script = document.createElement('script');
    script.src = 'assets/js/scripts.js';
    script.async = true
    document.head.appendChild(script);
  }

}

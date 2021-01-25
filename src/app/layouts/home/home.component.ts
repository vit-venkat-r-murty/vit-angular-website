import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.warn('home module loaded');
  }

  ngOnInit(): void {
    this.loadScript('assets/js/default/cookiealert.js');
    this.loadScript('assets/js/jquery.animatedheadline.min.js');
    this.loadScript('assets/js/default/active.js');
  }
  public loadScript(url: string) {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}

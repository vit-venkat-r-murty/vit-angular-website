import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('assets/js/default/cookiealert.js');
    this.loadScript('assets/js/jquery.animatedheadline.min.js');
    this.loadScript('assets/js/default/active.js');
  }
  public loadScript(url: string): void {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}

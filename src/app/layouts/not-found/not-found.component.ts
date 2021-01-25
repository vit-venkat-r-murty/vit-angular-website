import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor() { }

  headerClass(): void {
    document.getElementsByClassName('header-area')[0].classList.add('header2') ;
  }
  removeClass(): void {
    document.getElementsByClassName('header-area')[0].classList.remove('header2') ;
  }

  ngOnInit(): void {
    this.headerClass();
  }

  ngOnDestroy(): void {
    this.removeClass();
  }

}

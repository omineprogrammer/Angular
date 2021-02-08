import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { searchContext } from 'src/app/tools/tools';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = 'pp Comic'

  constructor(private _router:Router) { }

  ngOnInit(): void { }

  searchItem( expression:string, typeItem: string ){
    this._router.navigate( 
      [`/${typeItem}/search`, expression] )
  }

  searchContext = searchContext
}

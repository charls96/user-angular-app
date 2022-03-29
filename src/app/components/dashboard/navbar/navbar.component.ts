import { Menu } from './../../../interfaces/menu';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(){
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

}
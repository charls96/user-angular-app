import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: User[] = [
    {user: 'carlos', name: 'Carlos', surname: 'Daniel', gender: 'male'},
    {user: 'juanB', name: 'Juan', surname: 'malo', gender: 'male'},
    {user: 'vaness', name: 'Vanesa', surname: 'Villa', gender: 'female'},
    {user: 'geo', name: 'Geovanny', surname: 'Podesta', gender: 'male'},
    {user: 'almu', name: 'almudena', surname: 'Vivancos', gender: 'female'},
    {user: 'fede', name: 'Federico', surname: 'Pastor', gender: 'male'},
    {user: 'serito', name: 'Sergio', surname: 'Buendia', gender: 'male'},
  ];

  displayedColumns: string[] = ['user', 'name', 'surname', 'gender', 'actions'];
  dataSource = new MatTableDataSource(this.listUsers);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

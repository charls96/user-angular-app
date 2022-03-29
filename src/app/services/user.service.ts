import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUsers: User[] = [
    {user: 'carlos', name: 'Carlos', surname: 'Daniel', gender: 'male'},
    {user: 'juanB', name: 'Juan', surname: 'malo', gender: 'male'},
    {user: 'vaness', name: 'Vanesa', surname: 'Villa', gender: 'female'},
    {user: 'geo', name: 'Geovanny', surname: 'Podesta', gender: 'male'},
    {user: 'almu', name: 'almudena', surname: 'Vivancos', gender: 'female'},
    {user: 'fede', name: 'Federico', surname: 'Pastor', gender: 'male'},
    {user: 'serito', name: 'Sergio', surname: 'Buendia', gender: 'male'},
  ];

  constructor() { }

  getUsers(){
    return this.listUsers.slice();
  }

  deleteUser(index: number){
    this.listUsers.splice(index, 1);
  }
}

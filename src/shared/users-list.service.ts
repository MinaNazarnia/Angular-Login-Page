import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  login!: string;

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    return this.httpClient.get("https://api.github.com/users");
  }

  public getById(id: any) {
    return this.httpClient.get("https://api.github.com/users" + '/' + `${id}`)
  }
}

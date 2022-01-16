import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private httpClient: HttpClient) { }

  public get() {
    return this.httpClient.get("https://api.github.com/users");
  }

}

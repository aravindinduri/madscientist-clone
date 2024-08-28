import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetchingService {

  constructor(private http: HttpClient) {}

  async getData() {
    try {
      const data = await this.http.get("https://api.chucknorris.io/jokes/random?category=dev");
      console.log(data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }
}

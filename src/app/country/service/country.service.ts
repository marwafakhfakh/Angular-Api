import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private readonly httpClient:HttpClient) { }


  getAllCountries(){
    return this.httpClient.get('https://restcountries.com/v3.1/all').toPromise();
  }


}

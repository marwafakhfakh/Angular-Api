import { Component } from '@angular/core';
import { CountryService } from './service/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
data:any = []
constructor(private readonly countryService:CountryService){}

ngOnInit(...args: []) {
  this.getCountries()
}

async getCountries(){ 
    this.data = await this.countryService.getAllCountries();
    console.log(this.data)
    return this.data;
}


}

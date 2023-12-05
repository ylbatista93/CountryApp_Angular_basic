import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countriesName: Country[] = [];
  public initialValue: string ='';

  constructor(
    private contriesSvc: CountriesService
  ){}

  ngOnInit(): void {
    this.countriesName = this.contriesSvc.cacheStore.byCountries.countries;
    this.initialValue = this.contriesSvc.cacheStore.byCountries.term;
  }

  searchByCountry (term: string) :void {
    this.contriesSvc.searchCountry( term ).subscribe(countryName => {
      this.countriesName = countryName;
    })
  }

}

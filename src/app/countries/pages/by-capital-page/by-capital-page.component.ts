import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';
  
  constructor(
    private countriesSvc: CountriesService,
  ) {}


  ngOnInit(): void {
    //para obtener la lista de paises al regresar a Por Capital referente a la busqueda anterior
    this.countries = this.countriesSvc.cacheStore.byCapital.countries;
    this.initialValue = this.countriesSvc.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ): void {
    
    this.isLoading = true;
    this.countriesSvc.searchCapital( term ).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;    
    });
  }

}

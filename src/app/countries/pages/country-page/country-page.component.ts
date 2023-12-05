import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoutes: ActivatedRoute,
    private countiesSvc: CountriesService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.activatedRoutes.params
    .pipe(
      switchMap(({ id }) =>  this.countiesSvc.searchCountryByAlphaCode ( id ))
    )
    .subscribe( ( country ) => {
      // console. log(country);
      if(!country) return this.router.navigateByUrl('');
      
      return this.country = country;
      
    });
  }


}
 
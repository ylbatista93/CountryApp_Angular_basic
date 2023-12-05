import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public region: Country[] =[];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public initialValue: string = '';

  constructor(
    private countriesSvc: CountriesService
  ){}
  ngOnInit(): void {
    this.region = this.countriesSvc.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesSvc.cacheStore.byRegion.region;
  }

  searchRegion(region: Region): void {
    this.selectedRegion = region;
    this.countriesSvc.searchRegion( region ).subscribe(region =>{
      this.region = region;
    })
  }

}

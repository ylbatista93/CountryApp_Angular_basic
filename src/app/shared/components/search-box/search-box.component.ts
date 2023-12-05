import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
 
  
  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';


  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(1500)
    )
    .subscribe( value => {
      this.onDebounce.emit ( value );
      console.log('emitiendo valor');
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
    // console.log('destruido');
  }

  emitValue(value: string) :void {
    this.onValue.emit( value );
  }

  onKeyPress( searchTerm: string){
    // console.log(searchTerm);
    this.debouncer.next( searchTerm );
    
  }


}

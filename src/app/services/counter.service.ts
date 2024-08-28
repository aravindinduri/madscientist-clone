import { Injectable, Signal, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = signal(0)

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  getCounter(){
    return this.count()
  }

  incrementCounter(){
    
    this.count.update((oldValue)=>{
      return oldValue + 1
    })
  }
}

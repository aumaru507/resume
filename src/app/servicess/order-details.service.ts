import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  // fooddetails
  foodDetails =
  [
    {
    id:1,
    foodName:"com",
    foodDetails:"aumaru",
    foodPrice:200,
    foodImg:"https://images.unsplash.com/photo-1481887328591-3e277f9473dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1781&q=80"
    },
    {
      id:2,
      foodName:"com",
      foodDetails:"aumaru",
      foodPrice:200,
      foodImg:"https://images.unsplash.com/photo-1629954848757-921cf6d7d69e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      }
]
}

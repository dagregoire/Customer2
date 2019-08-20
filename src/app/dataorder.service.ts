import { Injectable } from '@angular/core';

@Injectable()

export class DataorderService {
  orders  =  [
    {idorder : '', product1: 'Basketball', product1prix : '$7.99', product2: 'Shoes', product2prix : '$199.99'},
    {idorder : '', product1: 'Frisbee', product1prix : '$2.99', product2: 'Hat', product2prix : '$5.99'},
    {idorder : '', product1: 'Boomerang', product1prix : '$19.99', product2: 'Helmet', product2prix : '$5.99'},
    {idorder : '', product1: 'Budgie Smugglers', product1prix : '$19.99', product2: 'Swimming Cap', product2prix : '$5.49'},
    {idorder : '', product1: 'Bow', product1prix : '$399.99', product2: 'Arrows', product2prix : '$69.99'},
    {idorder : '', product1: 'Baseball', product1prix : '$9.99', product2: 'bat', product2prix : '$19.99'},
    {idorder : '', product1: 'Surfboard', product1prix : '$299.99', product2: 'Wax', product2prix : '$5.99', product3 : 'Shark Repellent',product3prix : '$7.99'},
    {idorder : '', product1: 'Surfboard', product1prix : '$299.99', product2: 'Wax', product2prix : '$5.99'},

  ]
  constructor() { }
}

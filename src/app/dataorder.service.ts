import { Injectable } from '@angular/core';

@Injectable()
export class DataorderService {
  orders  =  [
    {idCustomer : 1, idorder : '1', product: 'Basketball', productprix : '$7.99'},
    {idCustomer : 2,idorder : '2', product: 'Frisbee', productprix : '$2.99'},
    {idCustomer : 3,idorder : '3', product: 'Boomerang', productprix : '$19.99'} ,
    {idCustomer : 4,idorder : '4', product: 'Budgie Smugglers', productprix : '$19.99'},
    {idCustomer : 5,idorder : '5', product: 'Bow', productprix : '$399.99'},
    {idCustomer : 7,idorder : '6', product: 'Surfboard', productprix : '$299.99'},
    {idCustomer : 6,idorder : '7', product: 'Baseball', productprix : '$9.99',},
    {idCustomer : 10,idorder : '8', product: 'Surfboard', productprix : '$299.99'},
    {idCustomer : 1,idorder : '9', product: 'Shoes', productprix : '$199.99'},
    {idCustomer : 2,idorder : '10', product: 'Hat', productprix : '$5.99'},
    {idCustomer : 3,idorder : '11', product: 'Helmet', productprix : '$19.99'},
    {idCustomer : 3,idorder : '12', product: 'Kangaroo Sadle', productprix : '$179.99'},
    {idCustomer : 4, idorder : '13', product: 'Swimming Cap', productprix : '$5.49'},
    {idCustomer : 2,idorder : '14', product: 'Frisbee', productprix : '$2.99'},
    {idCustomer : 5,idorder : '15', product: 'Arrows', productprix : '$69.99'},
    {idCustomer : 1,idorder : '16', product: 'Budgie Smugglers', productprix : '$19.99'},
    {idCustomer : 5,idorder : '17', product: 'Bow', productprix : '$399.99'},
    {idCustomer : 1,idorder : '18', product: 'Surfboard', productprix : '$299.99'},
    {idCustomer : 6,idorder : '19', product: 'Bat', productprix : '$19.99'},
    {idCustomer : 7,idorder : '20', product: 'Wax', productprix : '$5.99'},
    {idCustomer : 8,idorder : '21', product: 'Saddle', productprix : '$599.99'},
    {idCustomer : 8,idorder : '22', product: 'Riding cap', productprix : '$79.99'},
    {idCustomer : 10,idorder : '23', product: 'Wax', productprix : '$5.99'},
    {idCustomer : 10,idorder : '24', product: 'Shark Repellent', productprix : '$7.99'},
    {idCustomer : 11,idorder : '25', product: 'Car', productprix : '$42,999.99'},
    {idCustomer : 12,idorder : '26', product: 'Wax', productprix : '$5.99'},
    {idCustomer : 21,idorder : '27', product: 'Baseball', productprix : '$9.99'},
    {idCustomer : 21,idorder : '26', product: 'Bat', productprix : '$19.99'},
    {idCustomer : 21,idorder : '27', product: 'Shark Repellent', productprix : '$7.99'},
  ]
  constructor() { }
}

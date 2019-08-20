import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatacustomerService {
  customers = [
    {id:1,firstName:"Ted", lastName:"James",address:"1234 Anywhere St.",city:"Phoenix",state:"Arizona"},
    {id:2,firstName:"Michelle", lastName:"Thompson",address:"345 Cedar Point Ave.",city:"Encinitas",state:"California"},
    {id:3,firstName:"Zed", lastName:"Bishop",address:"1822 Long Bay Dr.",city:"Seattle",state:"Washington"},
    {id:4,firstName:"Tina", lastName:"Adams",address:"79455 Pinetop Way",city:"Chandler",state:"Arizona"},
    {id:5,firstName:"Igor", lastName:"Menar",address:"576 Crescent Blvd.",city:"Dallas",state:"Texas"},
    {id:6,firstName:"Brad", lastName:"Green",address:"9874 Center St.",city:"Orlando",state:"Florida"},
    {id:7,firstName:"Misko", lastName:"Hevery",address:"9812 Builtway Appt #1",city:"Carey",state:"North Carolina"},
    {id:8,firstName:"Heedy", lastName:"Wahlin",address:"4651 Tuvo St.",city:"Anaheim",state:"California"},
    {id:9,firstName:"John", lastName:"Papa",address:"66 Ray St.",city:"Orlando",state:"Florida"},
    {id:10,firstName:"Tonya", lastName:"Smith",address:"1455 Chandler Blvd.",city:"Atlanta",state:"Georgia"},
    {id:11,firstName:"Ward", lastName:"Bell",address:"888 Central St.",city:"Los Angeles",state:"California"},
    {id:12,firstName:"Marcus", lastName:"Hightower",address:"1699 Atomic St.",city:"Dallas",state:"Texas"},
    {id:13,firstName:"Thomas", lastName:"Martin",address:"98756 Center St.",city:"New York City",state:"New York"},
    {id:14,firstName:"Jean", lastName:"Martin",address:"98756 Center St.",city:"New York City",state:"New York"},
    {id:15,firstName:"Pinal", lastName:"Dave",address:"23566 Directive Pl.",city:"White Plains",state:"New York"},
    {id:16,firstName:"Robin", lastName:"Cleark",address:"35632 Richmond Circle Apt B",city:"Las Vegas",state:"Nevada"},
    {id:17,firstName:"Fred", lastName:"Roberts",address:"12 Ocean View St.",city:"Houston",state:"Texas"},
    {id:18,firstName:"Robyn", lastName:"Flores",address:"23423 Adams St.",city:"Seattle",state:"Washington"},
    {id:19,firstName:"Elaine", lastName:"Jones",address:"98756 Center St.",city:"Barcelona",state:"Catalonia"},
    {id:20,firstName:"Lilija", lastName:"Arnason",address:"23423 Adams St.",city:"Reykjavik",state:"Iceland"},
    {id:21,firstName:"Laurent", lastName:"Bugnion",address:"9874 Lake Blvd.",city:"Zurich",state:"Canton of Zurich"},
    {id:22,firstName:"Gabriel", lastName:"Flores",address:"2543 Cassiano",city:"Rio de Janeiro",state:"Rio de Janeiro"}
  ]

  constructor() { }
}

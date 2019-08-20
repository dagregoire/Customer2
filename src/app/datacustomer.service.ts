import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatacustomerService {
  customers = [
    {firstName:"Ted", lastName:"James",address:"1234 Anywhere St.",city:"Phoenix",state:"Arizona"},
    {firstName:"Michelle", lastName:"Thompson",address:"345 Cedar Point Ave.",city:"Encinitas",state:"California"},
    {firstName:"Zed", lastName:"Bishop",address:"1822 Long Bay Dr.",city:"Seattle",state:"Washington"},
    {firstName:"Tina", lastName:"Adams",address:"79455 Pinetop Way",city:"Chandler",state:"Arizona"},
    {firstName:"Igor", lastName:"Menar",address:"576 Crescent Blvd.",city:"Dallas",state:"Texas"},
    {firstName:"Brad", lastName:"Green",address:"9874 Center St.",city:"Orlando",state:"Florida"},
    {firstName:"Misko", lastName:"Hevery",address:"9812 Builtway Appt #1",city:"Carey",state:"North Carolina"},
    {firstName:"Heedy", lastName:"Wahlin",address:"4651 Tuvo St.",city:"Anaheim",state:"California"},
    {firstName:"John", lastName:"Papa",address:"66 Ray St.",city:"Orlando",state:"Florida"},
    {firstName:"Tonya", lastName:"Smith",address:"1455 Chandler Blvd.",city:"Atlanta",state:"Georgia"},
    {firstName:"Ward", lastName:"Bell",address:"888 Central St.",city:"Los Angeles",state:"California"},
    {firstName:"Marcus", lastName:"Hightower",address:"1699 Atomic St.",city:"Dallas",state:"Texas"},
    {firstName:"Thomas", lastName:"Martin",address:"98756 Center St.",city:"New York City",state:"New York"},
    {firstName:"Jean", lastName:"Martin",address:"98756 Center St.",city:"New York City",state:"New York"},
    {firstName:"Pinal", lastName:"Dave",address:"23566 Directive Pl.",city:"White Plains",state:"New York"},
    {firstName:"Robin", lastName:"Cleark",address:"35632 Richmond Circle Apt B",city:"Las Vegas",state:"Nevada"},
    {firstName:"Fred", lastName:"Roberts",address:"12 Ocean View St.",city:"Houston",state:"Texas"},
    {firstName:"Robyn", lastName:"Flores",address:"23423 Adams St.",city:"Seattle",state:"Washington"},
    {firstName:"Elaine", lastName:"Jones",address:"98756 Center St.",city:"Barcelona",state:"Catalonia"},
    {firstName:"Lilija", lastName:"Arnason",address:"23423 Adams St.",city:"Reykjavik",state:"Iceland"},
    {firstName:"Laurent", lastName:"Bugnion",address:"9874 Lake Blvd.",city:"Zurich",state:"Canton of Zurich"},
    {firstName:"Gabriel", lastName:"Flores",address:"2543 Cassiano",city:"Rio de Janeiro",state:"Rio de Janeiro"}
  ]

  constructor() { }
}

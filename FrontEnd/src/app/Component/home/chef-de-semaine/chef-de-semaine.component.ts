
import { Component, OnInit } from '@angular/core';


import {ChefService} from 'src/app/Service/chef.service'
import {Chef} from 'src/app/Model/chef.model';

@Component({
  selector: 'app-chef-de-semaine',
  templateUrl: './chef-de-semaine.component.html',
  styleUrls: ['./chef-de-semaine.component.css']
})




export class ChefDeLaSemaineComponent implements OnInit {


  

  chefs?:Chef[];  
  
  

  constructor(private chefService:ChefService) { }





  ngOnInit(): void {
    this.retrieveChefs();
  }

  
 

  retrieveChefs():void{
    this.chefService.getAll()
    .subscribe({
      next: (data) =>{
        this.chefs=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
  }

}
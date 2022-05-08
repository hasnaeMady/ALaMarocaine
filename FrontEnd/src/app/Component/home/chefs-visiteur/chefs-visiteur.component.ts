import { Component,Input, OnInit } from '@angular/core';
import { ChefService } from 'src/app/Service/chef.service';
import {Chef} from 'src/app/Model/chef.model';

import { BrowserAnimationsModule } 
    from '@angular/platform-browser/animations';
@Component({
  selector: 'app-chefs-visiteur',
  templateUrl: './chefs-visiteur.component.html',
  styleUrls: ['./chefs-visiteur.component.css']
})
export class ChefsVisiteurComponent implements OnInit {
  
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

import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipeData:any=[]
  constructor() { }

  ngOnInit(): void {
  
    console.log(this.recipeData.recipe)
    
  }

}

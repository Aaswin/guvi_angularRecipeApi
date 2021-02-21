import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"; 
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor( private http:  HttpClient) { }

  ngOnInit(): void {
  }
  getRecipe()
  {
   
    let App_id="a17c3733";
    let App_key="19bdee7f7e13a909fdd1c47c71002e09";
    let response= this.http.get<any>(`https://api.edamam.com/search?q=chicken&app_id=${App_id}&app_key=${App_key}`).subscribe(response=>
    {
      console.log(response);
      // let c=JSON.stringify(response);
      // console.log(c);
    });
  
     
  }
}

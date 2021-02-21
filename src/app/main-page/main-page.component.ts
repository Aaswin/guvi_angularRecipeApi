import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"; 
import { Observable } from 'rxjs';
import { FormArray,FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    dataListing:Array<Object>=[];
    constructor( private http:  HttpClient,private fb:FormBuilder) { }
    userFormGroup:any={};
    ngOnInit(): void {
      this.userFormGroup=this.fb.group(
        {
          query:this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        })
    }
    
    getRecipes()
    {
      
      let name=(this.userFormGroup.get('query').value);
      let App_id="a17c3733";
      let App_key="19bdee7f7e13a909fdd1c47c71002e09";
      let response= this.http.get<any>(`https://api.edamam.com/search?q=${name}&app_id=${App_id}&app_key=${App_key}`).subscribe(response=>
      {
        this.dataListing=response.hits;
      });
    }
  }
  

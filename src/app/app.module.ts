import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { MainPageComponent } from './main-page/main-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeCardComponent,
    SearchBarComponent,
    
    HeadNavComponent,
    
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

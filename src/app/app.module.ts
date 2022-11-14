import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

const appRoute: Routes = [
  {path:'',component:HomepageComponent},
  {path:'aboutus',component:AboutusComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute), FontAwesomeModule, FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

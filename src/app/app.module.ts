import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SwiperComponent } from './swiper/swiper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DevelopComponent } from './develop/develop.component';
import { CuroselComponent } from './curosel/curosel.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { Rv1Component } from './rv1/rv1.component';
import { BusinessComponent } from './business/business.component';
import { SoftwareComponent } from './software/software.component';
import { DesignComponent } from './design/design.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PersonalComponent } from './personal/personal.component';
import { PhotoComponent } from './photo/photo.component';
import { MusicComponent } from './music/music.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { Business1Component } from './business1/business1.component';
import { SignupComponent } from './signup/signup.component';
import { OoComponent } from './oo/oo.component';


import { PopoverModule } from 'ngx-bootstrap/popover';
import { FinanceComponent } from './finance/finance.component';
import { OffcComponent } from './offc/offc.component';
import { LifeComponent } from './life/life.component';
import { HealthComponent } from './health/health.component';
import { LoginComponent } from './login/login.component';
import { Teach1Component } from './teach1/teach1.component';
import { Teach2Component } from './teach2/teach2.component';
import { AcademicsComponent } from './academics/academics.component';
import { GetComponent } from './get/get.component';
import { GetdevComponent } from './getdev/getdev.component';
import { CsharpComponent } from './csharp/csharp.component';
import {MatRadioModule} from '@angular/material/radio';

import { CourseComponent } from './course/course.component';
import { SignComponent } from './sign/sign.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MarketComponent } from './market/market.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { ItComponent } from './it/it.component';
import { PerdevComponent } from './perdev/perdev.component';
import { AcademComponent } from './academ/academ.component';
import { BusyComponent } from './busy/busy.component';
import { DesignsComponent } from './designs/designs.component';
import { PhotographyComponent } from './photography/photography.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { HealthandfComponent } from './healthandf/healthandf.component';
import { MusicsComponent } from './musics/musics.component';
import { NgxCollapseModule } from 'ngx-collapse';
import { NewComponent } from './new/new.component';
import { WebComponent } from './web/web.component';

import { LogComponent } from './log/log.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SwiperComponent,
    DevelopComponent,
    CuroselComponent,
    ReviewsComponent,
    Rv1Component,
    BusinessComponent,
    SoftwareComponent,
    DesignComponent,
    MarketingComponent,
    PersonalComponent,
    PhotoComponent,
    MusicComponent,
    Business1Component,
    SignupComponent,
    OoComponent,
    FinanceComponent,
    OffcComponent,
    LifeComponent,
    HealthComponent,
    LoginComponent,
    Teach1Component,
    Teach2Component,
    AcademicsComponent,
    GetComponent,
    GetdevComponent,
    CsharpComponent,
  
    CourseComponent,
  
    SignComponent,
  
    AccountsComponent,
  
    MarketComponent,
  
    ProductivityComponent,
  
    ItComponent,
  
    PerdevComponent,
  
    AcademComponent,
  
    BusyComponent,
  
    DesignsComponent,
  
    PhotographyComponent,
  
    LifestyleComponent,
  
    HealthandfComponent,
  
    MusicsComponent,
  
    NewComponent,
  
    WebComponent,
  
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    PopoverModule.forRoot(),
    NgxCollapseModule,
    ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

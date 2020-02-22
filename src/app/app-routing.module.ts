import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SwiperComponent } from './swiper/swiper.component';
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
import { Business1Component } from './business1/business1.component';
import { SignupComponent } from './signup/signup.component';
import { OoComponent } from './oo/oo.component';
import { FinanceComponent } from './finance/finance.component';
import { OffcComponent } from './offc/offc.component';
import { LifeComponent } from './life/life.component';
import { LoginComponent } from './login/login.component';
import { Teach1Component } from './teach1/teach1.component';
import { HealthComponent } from './health/health.component';
import { AcademicsComponent } from './academics/academics.component';
import { GetComponent } from './get/get.component';
import { GetdevComponent } from './getdev/getdev.component';
import { CsharpComponent } from './csharp/csharp.component';
import { CourseComponent } from './course/course.component';
import { SignComponent } from './sign/sign.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MarketComponent} from './market/market.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { ItComponent } from './it/it.component';
import { PerdevComponent } from './perdev/perdev.component';
import { AcademComponent } from './academ/academ.component';
import { BusyComponent } from './busy/busy.component';
import { DesignsComponent } from './designs/designs.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import {  HealthandfComponent } from './healthandf/healthandf.component';
import {  MusicsComponent } from './musics/musics.component';
import {  WebComponent } from './web/web.component';
import { NewComponent } from './new/new.component';
import { LogComponent } from './log/log.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'swiper',component:SwiperComponent},
  {path:'develop',component:DevelopComponent},
  {path:'curosel',component:CuroselComponent},
  {path:'reviews',component:ReviewsComponent},
  {path:'rv1',component:Rv1Component},
  {path:'business',component:BusinessComponent},
  {path:'software',component:SoftwareComponent},
  {path:'design',component:DesignComponent},
  {path:'marketing',component:MarketingComponent},
  {path:'personal',component:PersonalComponent},
  {path:'photo',component:PhotoComponent},
  {path:'music',component:MusicComponent},
  {path:'business1',component:Business1Component},
  {path:'signup',component:SignupComponent},
  {path:'oo',component:OoComponent},
  {path:'finance',component:FinanceComponent},
  {path:'offc',component:OffcComponent},
  {path:'life',component:LifeComponent},
  {path:'login',component:LoginComponent},
  {path:'teach1',component:Teach1Component},
  {path:'health',component:HealthComponent},
  {path:'academics',component:AcademicsComponent},
  {path:'get',component:GetComponent},
  {path:'getdev',component:GetdevComponent},
  {path:'csharp',component:CsharpComponent},
  {path:'course',component:CourseComponent},
  {path:'sign',component:SignComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'productivity',component:ProductivityComponent},
  {path:'it',component:ItComponent},
  {path:'perdev',component:PerdevComponent},
  {path:'academ',component:AcademComponent},
  {path:'busy',component:BusyComponent},
  {path:'designs',component:DesignsComponent},
  {path:'lifestyle',component:LifestyleComponent},
  {path:'market',component:MarketComponent},
  {path:'healthandf',component:HealthandfComponent},
  {path:'musics',component:MusicsComponent},
  {path:'web',component:WebComponent},
  {path:'new',component:NewComponent},
  {path:'log',component:LogComponent},

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

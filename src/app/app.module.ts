import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { FormViewComponent } from './components/form-view/form-view.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { MidBannerComponent } from './components/mid-banner/mid-banner.component';
import { AboutComponent } from './components/about/about.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ClientReviewsComponent } from './components/client-reviews/client-reviews.component';
import { CardsComponent } from './components/cards/cards.component';
import { WppBtnComponent } from './components/wpp-btn/wpp-btn.component';
import { FooterComponent } from './template/footer/footer.component';
import { DashboardViewModule } from './components/dashboard-view/dashboard-view.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    ServicesComponent,
    FormViewComponent,
    ChecklistComponent,
    MidBannerComponent,
    AboutComponent,
    QuestionsComponent,
    ClientReviewsComponent,
    CardsComponent,
    WppBtnComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

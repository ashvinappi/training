import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { Exercice1Component } from './pages/exercice1/exercice1.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import { Exercice2Component } from './pages/exercice2/exercice2.component';
import { Exercice3Component } from './pages/exercice3/exercice3.component';
import { ContentHomeComponent } from './components/content-home/content-home.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { HeaderWithoutMenuComponent } from './components/header-without-menu/header-without-menu.component';
import { ContentExercice1Component } from './components/content-exercice1/content-exercice1.component';
import { ContentExercice2Component } from './components/content-exercice2/content-exercice2.component';
import { BarreRechercheComponent } from './components/barre-recherche/barre-recherche.component';
import { ContentExercice3Component } from './components/content-exercice3/content-exercice3.component';
import { TestPanelComponent } from './components/test-panel/test-panel.component';
import { PanelAccordionComponent } from './components/panel-accordion/panel-accordion.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { Modal1Component } from './components/dialog/modal1/modal1.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    Exercice1Component,
    CreateUserDialogComponent,
    Exercice2Component,
    Exercice3Component,
    ContentHomeComponent,
    Menu2Component,
    HeaderWithoutMenuComponent,
    ContentExercice1Component,
    ContentExercice2Component,
    BarreRechercheComponent,
    ContentExercice3Component,
    TestPanelComponent,
    PanelAccordionComponent,
    CarouselComponent,
    DialogComponent,
    Modal1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
<<<<<<< HEAD
import { CasasService } from './services/casas.service';
=======
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { AnimateModule } from 'primeng/animate';
import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

>>>>>>> f7d0cbc445c06c9d5510de3f1b0cfbe74692e98f

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BusquedaComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    SliderModule,
    CalendarModule,
    InputNumberModule,
    ChipModule,
    TagModule,
    AnimateModule,
    BrowserAnimationsModule,
    CheckboxModule,
    DropdownModule
  ],
  providers: [CasasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

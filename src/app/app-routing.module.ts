import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CasaComponent } from './components/casa/casa.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: 'busqueda/:termino', component: BusquedaComponent},
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'registro',  component: RegistroComponent},
  { path: 'casa/:casa', component: CasaComponent},
  { path: '', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

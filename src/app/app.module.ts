import { BrowserModule } from '@angular/platform-browser'; // Para que funcione en navegadores
import { NgModule } from '@angular/core'; 
import { FormsModule }   from '@angular/forms'; // <-- [(NgModel)] no funciona sin este package
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // para que funcionen las animaciones
import { RouterModule, Routes } from '@angular/router'; // para la navegacion

import { PopoverModule} from "ngx-popover";
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import { TestChildComponent } from './test/test-child.component';
import { TestNgforComponent } from './test/test-ngFor.component';
import { TestNgforChildComponent } from './test/test-ngFor-child.component';
import { TestBindingComponent } from './test/test-binding.component';
import { TestElementsComponent } from './test/test-html-elements.component';
import { TestAnimation } from './test/animation.component';
import { TestAnimationB } from './test/animationB.component';
import { TestAnimationC } from './test/animationC.component';
import { TestAnimationD } from './test/animationD.component';
import { SortbyComponent } from './test/sortby.component';


import { TableStripedComponent } from './table-striped/table-striped.component';
import { TableBasicComponent } from './table-striped/table-basic/table-basic.component';
import { DetailsGeneralComponent } from './table-striped/table-basic/details-general.component';
import { DetailsHistoricComponent } from './table-striped/table-basic/details-historic.component';
import { TableSummaryComponent } from './table-striped/table-summary/table-summary.component';
import { ContainerTableModComponent } from './container-table-mod/container-table-mod.component';
import { TableModularComponent } from './container-table-mod/table-modular/table-modular.component';



const appRoutes: Routes = [
  { path: '', component: TestAnimationD },//defailt root
  { path: 'TestComponent',         component: TestComponent },//Static root
  { path: 'TestNgforComponent',    component: TestNgforComponent },//Static root
  { path: 'TestBindingComponent',  component: TestBindingComponent },//Static root
  { path: 'TestElementsComponent', component: TestElementsComponent },//Static root
  { path: 'TestAnimation',         component: TestAnimation },//Static root
  { path: 'TestAnimationB',        component: TestAnimationB },//Static root
  { path: 'TestAnimationC',        component: TestAnimationC },//Static root
  { path: 'TestAnimationD',        component: TestAnimationD },//Static root
  { path: 'TableStripedComponent', component: TableStripedComponent },//Static root
  { path: 'ContainerTableModComponent', component: ContainerTableModComponent },//Static root
  { path: 'SortbyComponent',       component: SortbyComponent }//Static root
  
  //{ path: 'hero/:id', component: HeroDetailComponent }// Dinamic root
  /*,
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  declarations: [
    AppComponent,

    TestComponent,
    TestChildComponent,
    TestNgforComponent,
    TestNgforChildComponent,
    TestBindingComponent,
    TestElementsComponent,
    TestAnimation,
    TestAnimationB,
    TestAnimationC,
    TestAnimationD,
    SortbyComponent,
    NavbarComponent,
    TableStripedComponent,
    TableBasicComponent,
    DetailsGeneralComponent,
    DetailsHistoricComponent,
    TableSummaryComponent,
    ContainerTableModComponent,
    TableModularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    PopoverModule
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

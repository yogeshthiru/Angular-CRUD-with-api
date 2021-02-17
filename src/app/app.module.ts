import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestComponent } from './rest/rest.component';
import {HttpClientModule} from'@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { AddvaluesComponent } from './addvalues/addvalues.component';
import { NavingComponent } from './naving/naving.component';
import { GettingComponent } from './getting/getting.component';

@NgModule({
  declarations: [
    AppComponent,
    RestComponent,
    CrudComponent,
    AddvaluesComponent,
    NavingComponent,
    GettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

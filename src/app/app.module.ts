import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './table/ProductComponent';
import { NzTableModule } from 'ng-zorro-antd/table'; 
import { NzPaginationModule } from 'ng-zorro-antd/pagination'; 
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ComponentsComponent } from './components/components.component';
registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzPaginationModule,
    NzDividerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

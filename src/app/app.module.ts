import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent, LayoutComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

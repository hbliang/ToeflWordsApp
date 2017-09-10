import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { YandexService } from './services/yandex.service';
import { WordService } from './services/word.service';

import { WordComponent } from './components/word/word.component';
import { NavComponent } from './components/nav/nav.component';

import { AppPipes } from './pipes';

import { LoadingInterceptor } from './http/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppPipes,
    HttpClientModule
  ],
  providers: [
    YandexService,
    WordService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

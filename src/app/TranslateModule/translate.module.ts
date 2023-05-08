import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  HttpClient,
  HttpBackend,
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { ChangeLanguageService } from '../Services/Language/change-language.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(_http: HttpBackend) {
  return new MultiTranslateHttpLoader(_http, [
    { prefix: '../assets/translate/includes/header/', suffix: '.json' },
    { prefix: '../assets/translate/includes/loginForm/', suffix: '.json' },
  ]);
}

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
  ],
  exports: [HttpClientModule, TranslateModule],
  providers: [HttpClient, ChangeLanguageService],
})
export class TranslateSetupModule {}

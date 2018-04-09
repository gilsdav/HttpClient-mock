import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { mockInterceptorProvider } from '../mocks/mockHttpInterceptor';

const providers: any[] = [
  ...(environment.mock.enable ? [mockInterceptorProvider] : [])
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

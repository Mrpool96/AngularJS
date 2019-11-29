import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppContainerComponent } from './app-container/app-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

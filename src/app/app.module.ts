import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NbThemeModule,
  NbButtonModule,
  NbMenuModule,
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbSearchModule,
  NbUserModule,
  NbContextMenuModule
} from '@nebular/theme';
import { NbMenuInternalService, NbMenuService } from '@nebular/theme/components/menu/menu.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbUserModule,
    NbButtonModule,
    NbSidebarModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbContextMenuModule
  ],
  providers: [
    NbSidebarService,
    NbMenuInternalService,
    NbMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

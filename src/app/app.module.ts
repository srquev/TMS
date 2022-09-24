import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './admin/list/list.component';
import { TmsLoaderComponent } from './tms-loader/tms-loader.component';
import { HighlightDirective } from './highlight.directive';
import { AppendStringPipe } from './uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ListComponent,
    TmsLoaderComponent,
    HighlightDirective,
    AppendStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

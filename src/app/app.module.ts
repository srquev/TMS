import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { AppendStringPipe } from './appendString.pipe';
import { AuthInterceptor } from './auth.interceptor';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPopupComponent } from './list/list.component';
import { TmsResolverService } from './tms-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HighlightDirective,
    AppendStringPipe,
    ListPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard,
    TmsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

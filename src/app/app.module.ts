import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { DefaultModule } from './layouts/default/default.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CircleService } from './service/circle.service';
import { HealthyCoralsMarkersService } from './service/healthy-corals-markers.service';
import { UnhealthyCoralsMarkersService } from './service/unhealthy-corals-markers.service';
import { HttpClientModule } from '@angular/common/http';
// import { PostsComponent } from './modules/posts/posts.component';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
// import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import { DefaultComponent } from './layouts/default/default.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    // PostsComponent,
    // HeaderComponent,
    // FooterComponent,
    // SidebarComponent,
    // DefaultComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // add
    DefaultModule,
    HttpClientModule
    // LeafletModule
  ],
  providers: [
    UnhealthyCoralsMarkersService,
    HealthyCoralsMarkersService,
    CircleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

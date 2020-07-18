import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { LocationComponent } from './location/location.component';
import { ButtonModule } from 'primeng/button';
import { MainSectionComponent } from './location/main-section/main-section.component';
import { PropertiesComponent } from './location/properties/properties.component';
import { PhotoComponent } from './location/photo/photo.component';
import { LocationsService } from './locations.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LocationsListComponent,
    HomeComponent,
    NotFoundComponent,
    LocationComponent,
    MainSectionComponent,
    PropertiesComponent,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    CarouselModule,
    CdkScrollableModule,
    TableModule,
    ButtonModule,
  ],
  providers: [LocationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}

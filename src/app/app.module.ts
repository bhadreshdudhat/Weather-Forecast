import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarModule } from './toolbar/toolbar.module';
import { CoreModule } from './core/core.module';
import { WeatherDescriptionComponent } from './weather-description/weather-description.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { ForecastDescriptionComponent } from './forecast-description/forecast-description.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from 'src/services/weather.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDescriptionComponent,
    WeatherItemComponent,
    ForecastDescriptionComponent
  ],
  imports: [
    CoreModule,
    BrowserAnimationsModule,HttpClientModule,FormsModule,
    AppRoutingModule,
    ToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

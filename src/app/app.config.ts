import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: 'BASE_URL', useValue: 'http://localhost:5000'},
    provideRouter(routes),
    importProvidersFrom(HttpClientModule,ReactiveFormsModule,FormsModule), provideAnimationsAsync(),
    // Add other providers here if needed
  ]
};

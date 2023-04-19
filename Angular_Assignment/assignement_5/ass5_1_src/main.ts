import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { FirstCompComponent } from './app/first-comp/first-comp.component';


platformBrowserDynamic().bootstrapModule(FirstCompComponent)
  .catch(err => console.error(err));

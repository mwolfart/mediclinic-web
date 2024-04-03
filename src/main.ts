import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import angular from 'angular';

angular.module('myApp', ['ui.bootstrap']);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

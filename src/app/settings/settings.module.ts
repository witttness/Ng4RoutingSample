import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppSettingsComponent } from './app-settings/app-settings.component';

const settingsRoutes: Routes = [
  { path: '', component: AppSettingsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingsRoutes)
  ],
  declarations: [AppSettingsComponent]
})
export class SettingsModule { }

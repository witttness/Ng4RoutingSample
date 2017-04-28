import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard',  component: DashboardComponent },
// ];

const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent, 
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  }

];

//export const dashboardRouting = RouterModule.forChild(dashboardRoutes);

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    OverviewComponent,
    ReportsComponent
  ],
  imports: [RouterModule.forChild(dashboardRoutes)]
})
export class DashboardRoutingModule { }

import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  Route,
  RouterModule,
  Routes,
} from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AccountingBookComponent } from 'src/app/pages/accounting-book/accounting-book.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

const rootRoute: Route = {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
};

// Route children
const homeRoute: Route = {
  path: 'home',
  component: HomeComponent,
};
const accountingBookRoute: Route = {
  path: 'accounting-book/:id',
  component: AccountingBookComponent,
};

// Route
const privateRoute: Route = {
  path: '',
  component: AppComponent,
  children: [homeRoute, accountingBookRoute],
};

const routes: Routes = [rootRoute, privateRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

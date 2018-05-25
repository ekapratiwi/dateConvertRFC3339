import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./views/first-page/first-page.component";
import {ResultPageComponent} from "./views/result-page/result-page.component";

const routes: Routes = [
    { path: '', redirectTo: '/first-page', pathMatch: 'full' },
    { path: 'first-page', component: FirstPageComponent },
    { path: 'result-page/:some-data', component: ResultPageComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

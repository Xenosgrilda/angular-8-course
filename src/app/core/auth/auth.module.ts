import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

const AUTH_ROUTES: Routes = [
  { path: '', component: AuthComponent }
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports:
  [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AUTH_ROUTES),
    SharedModule
  ]
})
export class AuthModule {

}

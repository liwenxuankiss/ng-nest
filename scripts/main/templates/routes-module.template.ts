import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { {{ __capName }}Component } from "./{{ __fileName }}.component";
{{ __imports }}
const routes: Routes = [
  {
    path: "",
    component: {{ __capName }}Component,
    children: [{{ __children }}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class {{ __capName }}RoutesModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultComponent } from './components/result/result.component';
import { ResultApproveComponent } from './components/result-approve/result-approve.component';

const routes: Routes = [
  {
    path: 'result/reprove',
    component: ResultComponent,
  },
  {
    path: 'result/approve',
    component: ResultApproveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

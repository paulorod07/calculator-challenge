import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ResultComponent } from './components/result/result.component';
import { ResultApproveComponent } from './components/result-approve/result-approve.component';

import { ReproveDirective } from './directives/reprove.directive';
import { ApproveDirective } from './directives/approve.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ResultComponent,
    ReproveDirective,
    ResultApproveComponent,
    ApproveDirective,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

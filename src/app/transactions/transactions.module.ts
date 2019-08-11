import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsRouting } from '../transactions/transactions.routing';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    TransactionsRouting
  ]
})
export class TransactionsModule { }

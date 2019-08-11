import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'transactions', loadChildren: () => import('../app/transactions/transactions.module').then(mod => mod.TransactionsModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRouting { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {Routes, RouterModule} from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';


const routes : Routes = [ 
  {path: '', redirectTo: 'userList', pathMatch: 'full'},
  {path: 'userList', component: UserlistComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

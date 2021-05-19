import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageListComponent } from './message-list/message-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';

const routes: Routes = [
  { 
    path: '', 
    component: MessagesComponent,
    children: [
      { path: '', component: MessageListComponent },
      { path: 'thread/:messageId', component: MessageDetailComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }

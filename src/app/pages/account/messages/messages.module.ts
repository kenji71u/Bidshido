import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { BidshidoCommonModule } from 'src/app/components/bidshido-common.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MessagesComponent, MessageListComponent, MessageDetailComponent],
  imports: [
    CommonModule,
    BidshidoCommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }

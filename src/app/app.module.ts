import { CheckinService } from './checkin.service';
import { PessoaService } from './pessoa.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { PanelModule } from 'primeng/components/panel/panel';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {ButtonModule} from 'primeng/components/button/button';
import {TableModule} from 'primeng/components/table/table';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {MessagesModule} from 'primeng/components/messages/messages';
import {MessageModule} from 'primeng/components/message/message';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    InputMaskModule,
    CalendarModule,
    RadioButtonModule,
    DialogModule,
    MessagesModule,
    MessageModule
  ],
  providers: [PessoaService, CheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }

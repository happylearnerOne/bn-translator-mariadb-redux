import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import routing module
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular/main';
import { SuiModule, SuiModalModule } from 'ng2-semantic-ui';


// import { Ng2SmartTableModule } from 'ng2-smart-table';

import { LoginService } from './login/login.service';
import { SharedService } from './share.service';
import { AddTranslatorService } from './add-translator/add-translator.service';
import { QueryTranslatorService } from './query-translator/query-translator.service';

// import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddTranslatorComponent } from './add-translator/add-translator.component';
import { QueryTranslatorComponent } from './query-translator/query-translator.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
// import { DeleteButtonComponent } from './query-translator/delete.button.component';
// import { EditButtonComponent } from './query-translator/edit.button.component';

const routes : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',            component: LoginComponent },
  { path: 'home',             component: HomeComponent },
  { path: 'query-translator', component: QueryTranslatorComponent },
  { path: 'add-translator',   component: AddTranslatorComponent }
  //{ path: 'query', component: QueryComponent },
  //{ path: 'add',   component: AddComponent }
];
/*
const childRoutes : Routes = [
	{ path: 'home',             component: HomeComponent },
	{ path: 'query',            component: QueryComponent },
	{ path: 'add-translator',   component: AddTranslatorComponent }
]
*/
var config = {
    apiKey: "AIzaSyBa5woCoKNdbefFWtKLQV53Zcj059Rpazg",
    authDomain: "bn-translator.firebaseapp.com",
    databaseURL: "https://bn-translator.firebaseio.com",
    projectId: "bn-translator",
    storageBucket: "bn-translator.appspot.com",
    messagingSenderId: "1008007421898"
  };

// firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddTranslatorComponent,
    QueryTranslatorComponent,
    ConfirmModalComponent,
    // DeleteButtonComponent,
    // EditButtonComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    //RouterModule.forChild(childRoutes)
    // Ng2SmartTableModule
    AgGridModule.withComponents(
      [
        // DeleteButtonComponent,
        // EditButtonComponent
      ]
    ),
    SuiModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  providers: [
    AddTranslatorService,
    QueryTranslatorService,
  	LoginService,
  	SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

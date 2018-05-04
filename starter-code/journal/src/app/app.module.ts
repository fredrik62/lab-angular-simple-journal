import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EntryListComponent } from './components/entry-list/entry-list.component';
import { EntryListService } from './services/entry-list.service';
import { EntryDetailComponent } from './components/entry-detail/entry-detail.component';


const routes: Routes = [
  { path: '',  redirectTo: '/entries', pathMatch: 'full' },
  { path: 'entries',  component: EntryListComponent },
  { path: 'entries/:id', component: EntryDetailComponent }
 // { path: 'movies/create', component: MovieCreatePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EntryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

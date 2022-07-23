import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogNewComponent } from './blog/blog-new/blog-new.component';
import { BlogDeleteComponent } from './blog/blog-delete/blog-delete.component';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogEditComponent,
    BlogDeleteComponent,
    BlogNewComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'blog', component: BlogComponent },
      { path: 'blog/new', component: BlogNewComponent },
      { path: 'blog/edit', component: BlogEditComponent },
      { path: 'blog/delete', component: BlogDeleteComponent },
      { path: '', redirectTo: 'blog', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

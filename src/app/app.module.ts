import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

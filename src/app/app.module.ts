import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { GlyphsComponent } from './components/glyphs/glyphs.component';
import { GlyherComponent } from './containers/glyher/glyher.component';

import { ReactiveFormsModule } from '@angular/forms';
import { GlyphSeparatorPipe } from './pipes/glyph-separator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    GlyherComponent,
    GlyphsComponent,
    GlyphSeparatorPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

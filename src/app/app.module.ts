import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DecoratorLessonModule } from './modules/decorator-lesson/modules/decorator-lesson.module';
import { DirectivesLessonModule } from './modules/directives-lesson/modules/directives-lesson.module';
import { ExponentialPowerPipe } from './shared/pipes/exponential-power/exponential-power.pipe';
import { ReversePipe } from './shared/pipes/reverse/reverse.pipe';
import { FooterComponent } from './modules/footer/components/footer.component';
import { HomeComponent } from './modules/home/components/home.component';
import { LifeCycleHooksLessonComponent } from './modules/life-cycle-hooks-lesson/components/life-cycle-hooks-lesson.component';
import { NavBarComponent } from './modules/nav-bar/components/nav-bar.component';
import { NgrxLessonComponent } from './modules/ngrx-lesson/components/ngrx-lesson.component';
import { ObservableLessonComponent } from './modules/observable-lesson/components/observable-lesson.component';
import { PipeLessonComponent } from './modules/pipe-lesson/components/pipe-lesson.component';
import { RoutingLessonComponent } from './modules/routing-lesson/components/routing-lesson.component';
import { RxjsLessonComponent } from './modules/rxjs-lesson/components/rxjs-lesson.component';
import { FormsLessonModule } from './modules/forms-lesson/modules/forms-lesson.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'
import { MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox'
import { MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips'
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialPowerPipe,
    FooterComponent,
    HomeComponent,
    LifeCycleHooksLessonComponent,
    NavBarComponent,
    NgrxLessonComponent,
    ObservableLessonComponent,
    PipeLessonComponent,
    ReversePipe,
    RoutingLessonComponent,
    RxjsLessonComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    DecoratorLessonModule,
    DirectivesLessonModule,
    FormsLessonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

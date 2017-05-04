import { EventoService } from './_services/evento.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { RegisterComponent } from './register/register.component';
import { EventosModule } from './eventos/eventos.module';
import { JobsModule } from './jobs/jobs.module';
import { AboutModule } from './about/about.module';
import { AppConfig } from './app.config';
import { JobService } from './_services/job.service';
import { GuiaDoAlunoComponent } from './guia-do-aluno/guia-do-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    GuiaDoAlunoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    EventosModule,
    JobsModule,
    AboutModule
  ],
  providers: [
    AppConfig,
    JobService,
    EventoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

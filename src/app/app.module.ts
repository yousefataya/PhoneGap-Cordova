import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { AppErrorHandler } from "./core/handlers/error.handler";
import { AppHttpInterceptor } from "./core/interceptors/http.interceptor";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { jqxDateTimeInputModule } from 'jqwidgets-framework/jqwidgets-ng/jqxdatetimeinput';
import { NgxLoadingModule } from "ngx-loading";
import { AppHomeComponent } from "./views/main/home/home.component";
import { AppLoginModule } from "./views/login/login.module";
import { AppHomeModule } from "./views/main/home/home.module";
import { AppComponent } from "./app.component";
@NgModule({
    bootstrap: [AppHomeComponent  ],
    declarations: [AppComponent],
    imports: [
        AppLoginModule,
        AppHomeModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        
        NgxLoadingModule.forRoot({}),
        FormsModule, jqxDateTimeInputModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandler },
        { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }
    ]
})
export class AppModule { }

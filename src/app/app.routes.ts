import { Routes, RouterModule } from "@angular/router";
import { AppRouteGuard } from "./core/guards/route.guard";
import { AppCustomPreloader } from "./AppCustomPreloader";
import { NgModule } from "@angular/core";
import { AppHomeComponent } from "./views/main/home/home.component";
import { AppLoginComponent } from "./views/login/login.component";

export const ROUTES: Routes = [
    {
        path: 'login',
        component: AppLoginComponent,
        children: [
            {
                path: 'login',
                loadChildren: () => import("./views/login/login.module").then((x) => x.AppLoginModule)
            }
        ]
    },
    {
        path: "main",
        runGuardsAndResolvers:"always",
        canActivate: [AppRouteGuard],
        children: [
            {
                path: "files",
                loadChildren: () => import("./views/main/files/files.module").then((x) => x.AppFilesModule)
            },
            
            {
                path: "home",
                component: AppHomeComponent,
                runGuardsAndResolvers: "always",
                loadChildren: () => import("./views/main/home/home.module").then((x) => x.AppHomeModule)
            },
            {
                path: "list",
                loadChildren: () => import("./views/main/list/list.module").then((x) => x.AppListModule)
            },
            {
                path: "rxjs",
                loadChildren: () => import("./views/main/rxjs/rxjs.module").then((x) => x.AppRxjsModule)
            },
            {
                path: "search",
                loadChildren: () => import("./views/search/search.module").then((x) => x.AppSearchModule)
            }
            
            
        ]
    },
    { path: "**", redirectTo: "" }
    
];
@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { preloadingStrategy: AppCustomPreloader })], //own custom preloader
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }

import * as angular from "angular";
import 'angular-ui-router';

import { AppComponent }   from "./components/app.component";
import { HomeComponent }   from "./components/home.component";
import { CadastroComponent } from "./components/cadastro.component";

import { DataService } from "./services/data.service"

module App {
    
	angular.module('app', ["ui.router"])
    .config((
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider,
        $locationProvider: angular.ILocationProvider,
    ) => {
        let states = [
            {
                name: 'home',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'register',
                url: '/register',
                template: '<register></register>'
            }        
        ];

        states.forEach(st => $stateProvider.state(st));

        $urlRouterProvider.otherwise('/',);
        $locationProvider.html5Mode(false).hashPrefix("");
    })
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .component(HomeComponent.componentName, HomeComponent.componentConfig)
    .component(CadastroComponent.componentName, CadastroComponent.componentConfig)
    .service('DataService', DataService)
    // .run(['DataService', function(DataService: DataService){
    //     console.log(DataService.get());
    // }])
    ;
}
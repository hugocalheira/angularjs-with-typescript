import * as angular from "angular";
import 'angular-ui-router';

import { AppComponent }   from "./components/app.component";
import { HomeComponent }   from "./components/home.component";
import { CadastroComponent } from "./components/cadastro.component";

module App {
    
	angular.module('app', ["ui.router"])
    .config(function(
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider,
        $locationProvider: angular.ILocationProvider
    ){
        let states = [
            {
                name: 'home',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'cadastro',
                url: '/cadastro',
                template: '<cadastro></cadastro>'
            }        
        ];

        states.forEach(function(state) {
            $stateProvider.state(state);
        });

        $urlRouterProvider.otherwise('/',);
        $locationProvider.html5Mode(false).hashPrefix("");
    })
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .component(HomeComponent.componentName, HomeComponent.componentConfig)
    .component(CadastroComponent.componentName, CadastroComponent.componentConfig)
    ;
}
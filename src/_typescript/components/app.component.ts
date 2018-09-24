import { DataService } from '../services/data.service';

export class AppComponent {

    static componentName  : string = "app";
    static componentConfig:ng.IComponentOptions = {
        bindings: {
        },
        controller: AppComponent,
        controllerAs: "$AppCtrl",
        templateUrl: "views/app.component.html"
    };

    static $inject = ['$scope','DataService'];

    public edit: any;

    constructor(
        // loadData: DataService
        ) {
        console.log('Inicializando App');
        // loadData = new DataService();

        // Grava dados iniciais em localStorage
        // localStorage.setItem('cadastros', JSON.stringify(loadData.get()));
        // console.log(JSON.parse(localStorage.getItem('cadastros')))
    }
 
}
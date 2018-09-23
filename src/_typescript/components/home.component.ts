import { User } from '../interfaces/user';
import { DataService } from '../services/data.service';

export class HomeComponent {

    static componentName: string = "home";
    static componentConfig: ng.IComponentOptions = {
        bindings: {
        },
        controller: HomeComponent,
        controllerAs: "$HomeCtrl",
        templateUrl: "views/home.component.html"
    };

    static $inject = ['$scope','DataService'];

    public lista: User[] = [];

    editUser(user:User) {
        console.log(user);
    }

    removeUser(user:User) {
        console.log(user);
    }

    constructor(private _loadData: DataService) {
        _loadData = new DataService();
        this.lista = _loadData.get()
    }
 
}

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

    static $inject = ['$scope'];

    public lista: User[] = [];
    public busca: string = '';
    private _data: any;

    editUser(user:User) {
        console.log(user);
    }

    removeUser(user:User) {
        console.log('excluindo', user);
        this.lista = this._data.delete(user);
    }

    constructor(
        // private _loadData: DataService,
    ) {
        // _loadData = new DataService();
        this._data = new DataService();
        this.lista = this._data.get()
    }
 
}

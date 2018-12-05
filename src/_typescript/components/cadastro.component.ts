import { User } from '../interfaces/user';
import { DataService } from '../services/data.service';

export class CadastroComponent {

    static componentName  : string = "register";
    static componentConfig:ng.IComponentOptions = {
        bindings: {
        },
        controller: CadastroComponent,
        controllerAs: "$CadastroCtrl",
        templateUrl: "views/cadastro.component.html"
    };

    static $inject = ['$scope'];

    public feedback: string = '';
    public FormUser: any;
    public user: User;
    // private _list: User[] = [];
    private _data: any;

    editUser(user:User) {
        console.log('editando cadastro');
        this._data.put(user);
    }

    addUser(user:User) {
        console.log('novo cadastro');
        if(this._data.post(user)){
            this.feedback = 'success';
            this.user = {name:'', cpf: '', email: '', phone: ''};
        }else{
            
            this.feedback = 'fail';
        }
    }

    save() {
        this.addUser(this.user);
    }

    constructor() {
        this._data = new DataService();
        // this._list = this._data.get();
    }
 
}
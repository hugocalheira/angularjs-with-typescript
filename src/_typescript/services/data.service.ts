import { User } from '../interfaces/user';

export class DataService {

    httpService: ng.IHttpService;
    handlerUrl: string;

    constructor( $http: ng.IHttpService )
    {
        // super();
        this.httpService = $http;
        this.handlerUrl = 'https://private-f91e8-optimusbrasil.apiary-mock.com/users';
    }
    
    handlerResponded( response: any, params: any ): any
    {
        response.data.requestParams = params;
        return response.data;
    }

    public get(): User[] {
        let data: User[] = JSON.parse(localStorage.getItem('cadastros'));



        this.httpService.get(this.handlerUrl)
        .then( ( response: any ) => {
            console.log(response)
            return response
        }
        );

        if(data) {
            console.log('Retornando dados do localStorage');
            return data;
        } else {


            console.log('Retornando dados de https://private-f91e8-optimusbrasil.apiary-mock.com/users');

            // data = [
            //     {
            //       'name': 'My name 1',
            //       'cpf': '04080757247',
            //       'phone': '11987654321',
            //       'email': 'myemail1@test.com.br'
            //     },
            //     {
            //       'name': 'My name 2',
            //       'cpf': '77797584192',
            //       'phone': '11987654321',
            //       'email': 'myemail2@test.com.br'
            //     },
            //     {
            //       'name': 'My name 3',
            //       'cpf': '45486737688',
            //       'phone': '11987654321',
            //       'email': 'myemail3@test.com.br'
            //     }
            // ];
            
            // registra no localStorage
            localStorage.setItem('cadastros', JSON.stringify(data));
            return data;
        }
    }
    
    public post(user: User) {
        console.log('post', user);
    }

    public put(user: User) {
        console.log('put', user);
    }

    public delete(user: User) {
        console.log('delete', user);
    }

}

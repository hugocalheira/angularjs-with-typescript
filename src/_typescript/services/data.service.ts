import { User } from '../interfaces/user';

export class DataService {

    // httpService: ng.IHttpService;
    handlerUrl: string;

    
    static $inject = ['$http'];

    constructor( 
        // private $http: ng.IHttpService 
    )
    {
        this.handlerUrl = 'https://private-f91e8-optimusbrasil.apiary-mock.com/users';
    }
    
    // handlerResponded( response: any, params: any ): any
    // {
    //     response.data.requestParams = params;
    //     return response.data;
    // }

    public get(): User[] {

        let data: User[] = JSON.parse(localStorage.getItem('cadastros'));

        // console.log(this.httpService);
        // this.httpService.get(this.handlerUrl)
        // .then( ( response: any ) => {
        //     console.log('==>',response)
        //     return response
        // }
        // );

        if(data) {
            console.log('Retornando dados do localStorage');
            return data;
        } else {


            console.log('Retornando dados de https://private-f91e8-optimusbrasil.apiary-mock.com/users');

            data = [
                {
                  'name': 'Hugo Calheira Durães',
                  'cpf': '04080757247',
                  'phone': '11987654321',
                  'email': 'hugocalheira@gmail.com'
                },
                {
                  'name': 'Ovalino Alvoriçado de Sá',
                  'cpf': '77797584192',
                  'phone': '11987654321',
                  'email': 'ovalino@test.com.br'
                },
                {
                  'name': 'Epaminâncio Freitas das Pamonhas',
                  'cpf': '45486737688',
                  'phone': '11987654321',
                  'email': 'pamonha@test.com.br'
                }
            ];
            
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

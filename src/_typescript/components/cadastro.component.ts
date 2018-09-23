export class CadastroComponent {

    static componentName  : string = "cadastro";
    static componentConfig:ng.IComponentOptions = {
        bindings: {
        },
        controller: CadastroComponent,
        controllerAs: "$CadastroCtrl",
        templateUrl: "views/cadastro.component.html"
    };

    constructor() {
        console.log('cadastro');
    }
 
}
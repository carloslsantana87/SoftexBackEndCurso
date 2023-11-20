class Pato {
    public request(): string {
        return 'O pato faz o seguinte som por natureza: Quá quá quá quá!';
    }
}

class AdaptadorPato {
    public specificRequest(): string {
        return 'Có có có có';
    }
}

class AdaptadorPatoDemo extends Pato {
    private adaptee: AdaptadorPato;

    constructor(
        adaptee: AdaptadorPato) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').join('');
        return `Mas o pato que estamos vendo está se comportando de maneira diferente, está se comportando 
como uma galinha, está fazendo o seguinte som: ${result}, mas é um pato!`;
    }
}


console.log('');

function somIni(alvo: Pato) {
    console.log(alvo.request());
}

const somQua = new Pato();
somIni(somQua);


console.log('');

const adaptador = new AdaptadorPato();
console.log(`A galinha faz o seguinte som por natureza  ${adaptador.specificRequest()}`);

console.log('');


const adaptacao = new AdaptadorPatoDemo(adaptador);
somIni(adaptacao);

console.log('');
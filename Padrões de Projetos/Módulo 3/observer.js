class Editor {
    texto: string;
    constructor(texto: string) {
        this.texto = texto;
    }
}
class TextEditor extends Editor {
    texto: string;
    numerodelinha: number;
    constructor(texto: string) {
        super(texto);
        //this.texto = texto;
        this.numerodelinha = 1;
        this.corpodotexto = [];
    }
    inserirLinha(texto: string): void {
        this.corpodotexto.push(`${this.numerodelinha++}   ${this.texto = texto}`);
    }
    removeLinha(linhaPosicao: number): void {
        this.corpodotexto.splice(linhaPosicao,1);
    }
    imprimeTexto(textoCompleto: string){   
            var imptexto = "TEXTO\n";
            imptexto += "--------------------------------------------------------------------\n";
            imptexto +=  this.corpodotexto.join("\n")+"\n"; 
            imptexto += "--------------------------------------------------------------------\n";
            return imptexto; 
    }
}

var edit = new TextEditor();
edit.inserirLinha("Vamos começar");
edit.inserirLinha("O texto é para Crianças");
edit.inserirLinha("O texto também é para adultos");
edit.inserirLinha("É um texto para todos!");

console.log(edit.imprimeTexto());

edit.removeLinha(1);

console.log(edit.imprimeTexto());
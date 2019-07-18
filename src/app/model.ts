import { Validators } from '@angular/forms';
import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/typings/dir-document-token';

export class Pessoa {
    nome: string;
    documento: string;
    telefone: string;
}

export class Checkin {
    pessoa = new Pessoa();
    dataEntrada: Date;
    dataSaida: Date;
    adicionalVeiculo: boolean;

    constructor(pessoa: Pessoa,
        dataEntrada: Date,
        dataSaida: Date,
        adicionalVeiculo: boolean){
            this.pessoa = pessoa;
            this.dataEntrada = dataEntrada;
            this.dataSaida = dataSaida;
            this.adicionalVeiculo = adicionalVeiculo;
    }
}

export class Resumo{
    nome: string;
    documento: string;
    valor: number;
}
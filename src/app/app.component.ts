import { CheckinService } from './checkin.service';
import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private pessoaService: PessoaService,
            private checkinService: CheckinService){}

  title = 'Hotel-Front';

  checkin: any;
  pessoa: any;

  resumo = [];

  pessoas = [];

  filtro = "noHotel";

  display: boolean = false;

  msgs: Message[] = [];

  fuso = new Date().getTimezoneOffset()

  showDialog() {
    this.display = true;
  }
    
  ngOnInit(){
    this.checkin = {};
    this.checkin.adicionalVeiculo = false;

    this.pessoa = {};

    this.pessoaService.listar()
      .then(dados => {
        this.pessoas = dados
        .map(p => ({ label: p.nome, value: p }));
      })

      this.filtrar();
  }

  salvar(frm: FormGroup){  
    let fusoEntrada = new Date(this.checkin.dataEntrada)
    let fusoSaida = new Date(this.checkin.dataSaida
      )
    fusoEntrada.setMinutes(fusoEntrada.getMinutes() - 180)
    this.checkin.dataEntrada = fusoEntrada

    if (this.checkin.dataSaida != null){
      fusoSaida.setMinutes(fusoSaida.getMinutes() - 180)
      this.checkin.dataSaida = fusoSaida
    }

    this.checkinService.incluir(this.checkin)
      .subscribe(
        resposta => {
          this.msgs.push({severity:'success', summary:'Successo', detail:'Check in com sucesso'});          

          frm.reset();
          this.filtrar()
        },
        error => {
          this.msgs.push({severity:'error', summary:'Erro', detail:'Erro ao incluir check in.'});
        });              
  }

  filtrar(){       
    this.resumo = [];

    if (this.filtro == 'foraHotel'){  
      this.checkinService.listarForaHotel()
        .subscribe(
         resposta => {
 
          let resumoCheckin: any;
            resumoCheckin = resposta;

            resumoCheckin.forEach(element => {
              this.resumo.push({
                nome: element.nome, documento: element.documento, valor: element.valor.toFixed(2)
              })              
            });
         }
        );
    } 

    if (this.filtro == 'noHotel'){
      this.checkinService.listarNoHotel()
        .subscribe(
          resposta => {
            let resumoCheckin: any;
            resumoCheckin = resposta;

            resumoCheckin.forEach(element => {
              this.resumo.push({
                nome: element.nome, documento: element.documento, valor: 'Em aberto'
              })              
            });
          }
        );
      }
  }

  salvarPessoa(frmpessoa: FormGroup){
    this.pessoaService.salvar(this.pessoa)
      .subscribe(
        resposta => {
          this.msgs.push({severity:'success', summary:'Successo', detail:'Cadastro salvo com sucesso'});
          this.display = false;

          this.pessoas.push ({
            label: this.pessoa.nome, value: resposta      
          });

          frmpessoa.reset();
        },
        error => {
          this.msgs.push({severity:'error', summary:'Erro', detail:'Erro ao incluir um novo cadastro.'});
        });    
  }
}

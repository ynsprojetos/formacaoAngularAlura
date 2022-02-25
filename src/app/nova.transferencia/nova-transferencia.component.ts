import { Router, RouterModule } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log("Solicitado nova transferência")
    const valorEmitir: Transferencia = {valor:this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
    }, (error) => console.log(error))
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}

import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor(private service: TransferenciaService){}

  title = 'bytebank';
  destino: number = 0;
  valor: number = 0;

  transferir($event: any){
   this.service.adicionar($event)
  }
}

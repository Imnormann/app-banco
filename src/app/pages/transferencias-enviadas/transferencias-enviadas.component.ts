import { Component } from '@angular/core';
import { transferenciasEnviadas } from 'src/app/datos/transferencias ejemplo';

@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent {

transferencias: any[] = transferenciasEnviadas;

}

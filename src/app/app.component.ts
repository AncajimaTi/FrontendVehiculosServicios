import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalvehiculoComponent } from './modalvehiculo/modalvehiculo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Serviciosvehiculos';

  constructor(private modalService: NgbModal){
  }
  OpenModal(){
    const modalRef = this.modalService.open(ModalvehiculoComponent, { size: 'lg', backdrop: 'static' });
  }
}

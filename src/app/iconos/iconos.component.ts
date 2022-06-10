import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-iconos',
  templateUrl: './iconos.component.html',
  styleUrls: ['./iconos.component.scss']
})
export class IconosComponent implements OnInit {
  public icono?: string;
  public numeroCat?: string;
  constructor() { }
  @Input() dataEntrante: any;
  @Input() subcatContendiente = 'tea';
  @Output() subcatContendienteEvent = new EventEmitter<string>();
  ngOnInit(): void {
    //this.icono = "http://http://localhost:4200/";
  }
  addSubcatContendiente(value: string){
    this.subcatContendienteEvent.emit(value);
  }

}

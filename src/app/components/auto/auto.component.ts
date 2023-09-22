import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss'],
})
export class AutoComponent  implements OnInit {
  @Input( ) direccion: string =  '';
  @Input( ) descripcion : string ='';
//aca quedamos
  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'https://toti.site/';
  urlImagen: string = 'https://picsum.photos/400'
  nome_curso: string = 'Intro ao Angular';
  
  getvalor(): number {
    return 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

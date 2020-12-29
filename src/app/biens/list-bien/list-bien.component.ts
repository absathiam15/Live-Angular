import { Component, OnInit } from '@angular/core';
import { BiensService } from 'src/app/bien/biens.service';
import { Bien } from '../bien.model';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {

  search: string = '';
  biens: Bien[];
  
   
  constructor(
    private biensService: BiensService
  ) { }

  ngOnInit(): void {
    this.biens = this.biensService.getAllBiens();
  }

}

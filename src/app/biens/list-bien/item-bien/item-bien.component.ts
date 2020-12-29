import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';
import { Bien } from '../../bien.model';

@Component({
  selector: 'app-item-bien',
  templateUrl: './item-bien.component.html',
  styleUrls: ['./item-bien.component.css']
})
export class ItemBienComponent implements OnInit {

@Input() bien: Bien;

  constructor(
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void { 
  }

}

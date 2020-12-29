import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BiensService } from 'src/app/bien/biens.service';
import { Bien } from '../bien.model';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {

  bien: Bien;

  constructor(
    private biensService: BiensService,
    private route: ActivatedRoute
  ) {
    console.log('the constructor')
   }

  ngOnInit(): void {
    console.log('the ngOnInit')
    const idBien = +this.route.snapshot.params['id'];
    this.bien = this.biensService.getBienById(idBien);
    // for next time that this component will b loaded
    this.route.params.subscribe(
      (params: Params) => {
        const idBien = +p['id'];
        this.bien = this.biensService.getBienById(idBien);
      }
    );
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nom = 'Anonymous';
  age = 26;
  ok = false;
  textBtn = 'Activer';

  onclickBtn() {
    this.ok = !this.ok;
    this.textBtn = this.ok ? 'Desactiver' : 'Activer ';
  }
}

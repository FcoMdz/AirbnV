import { Component, Input } from '@angular/core';
import { Casa } from 'src/app/services/casas.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() casas: Casa[] = [];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recomendation',
  templateUrl: "recomendation.component.html",
  styleUrls: ["recomendation.component.css"],

})
export class RecomendationComponent {
  @Input() icon: string = "star";
  @Input() color: string = "warn";
}

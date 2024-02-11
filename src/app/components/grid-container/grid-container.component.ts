import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-container',
  templateUrl: "grid-container.component.html",
  styleUrls: ["grid-container.component.css"],
})
export class GridContainerComponent {

  @Input() background: string = "default";

}

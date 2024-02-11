import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.css']
})
export class HomeItemComponent {
  @Input() profileUrl: string = "../../../assets/artesao-logo.jpg"
}

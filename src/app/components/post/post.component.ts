import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: "post.component.html",
  styleUrls: [ "post.component.css" ]
})
export class PostComponent {
  @Input() profileUrl: string = "../../../assets/artesao-logo.jpg";
  @Input() contentImgUrl: string = "../../../assets/artesao-logo.jpg";

  @Input() username: string = "username";
  @Input() cargo: string = "Admin";
  @Input() titulo: string = "titulo";

  @Input() conteudo: string = "conteudo"

  @Input() data: string = "00/00/0000"//new Intl.DateTimeFormat("pt-BR").format(new Date());

}

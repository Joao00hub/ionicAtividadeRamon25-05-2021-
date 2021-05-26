import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajens',
  templateUrl: './viajens.page.html',
  styleUrls: ['./viajens.page.scss'],
})
export class ViajensPage implements OnInit {

  viajens = [
    {
      local: "Japão",
      descricao: "Lugar onde vive o Goku",
      dtVisita: "25/05/2021",
      imagem: "https://i1.wp.com/porondeeuvou.com/wp-content/uploads/2019/10/Coisas_para_saber_antes_de_visitar-o-japa%CC%83o-2.jpg?resize=756%2C489&ssl=1"
    },
    {
      local: "Canada",
      descricao: "Lugar onde vivem os ursos",
      dtVisita: "26/05/2021",
      imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c1/ff/28/caption.jpg?w=1600&h=1100&s=1"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

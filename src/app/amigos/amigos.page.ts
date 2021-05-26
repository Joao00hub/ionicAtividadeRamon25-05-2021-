import { Component, OnInit } from '@angular/core';
import { ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos = [
    {
      nome: "João",
      idade: "30",
      nivelAmizade: "5",
    },
    {
      nome: "Maria",
      idade: "40",
      nivelAmizade: "5",
    },
    {
      nome: "Anna",
      idade: "21",
      nivelAmizade: "5",
    },
    {
      nome: "Scarlet",
      idade: "23",
      nivelAmizade: "5",
    },
    {
      nome: "Anderson",
      idade: "27",
      nivelAmizade: "5",
    }
  ];

  constructor(private btnAction : ActionSheetController) { }

  ngOnInit() {
  }
  async MostrarActionSheet(){
    const actionSheet = await this.btnAction.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Deletar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Deleteado');
        }
      },  {
        text: 'Editar',
        icon: 'pencil-outline',
        handler: () => {
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
}

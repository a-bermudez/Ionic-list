import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController, ItemReorderEventDetail, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public shoppingList: ShoppingItemsService,
    private alertController: AlertController,
    private menuController:MenuController
  ) {}
  handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const item = this.shoppingList.items.splice(event.detail.from, 1)[0];

    this.shoppingList.items.splice(event.detail.to, 0, item);
    event.detail.complete();
    console.log();
  }
  async removeItem(item: string): Promise<void> {
    console.log(item);

    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Seguro que quieres borrar el item?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.shoppingList.removeItems(item);
          },
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss();
          },
        },
      ],
    });
    await alert.present();
  }
  async removeAll(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Seguro que quieres borrar todos los items?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.shoppingList.removeAllItems();
            this.menuController.close()
          },
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss();
          },
        },
      ],
    });
    await alert.present();
  }
}

import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  item: string;
  constructor(
    private shoppingItemsService: ShoppingItemsService,
    private alertController: AlertController
  ) {}
  addItem(): void {
    console.log(this.shoppingItemsService.existItem(this.item));
    if (!this.shoppingItemsService.existItem(this.item)) {
      this.shoppingItemsService.addItem(this.item);
      this.item = '';
      console.log(this.shoppingItemsService.items);
      this.alertSuccess();
    } else {
      this.alertError();
    }
  }

  async alertSuccess(): Promise<void> {
    const alert: HTMLIonAlertElement = await this.alertController.create({
      header: 'Éxito',
      message: '¡Item añadido!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async alertError(): Promise<void> {
    const alert: HTMLIonAlertElement = await this.alertController.create({
      header: 'Error',
      message: '¡Item ya existente!',
      buttons: ['OK'],
    });
    await alert.present();
  }
}

import { Order } from "../model/order";

export class KitchenService {
	async sendToKitchen(order: Order) {
		console.log("Commande envoyée en cuisine");
	}
}

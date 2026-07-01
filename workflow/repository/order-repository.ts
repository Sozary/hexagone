import { Order } from "../model/order";

export class OrderRepository {
	async save(order: Order) {
		console.log("Commande enregistrée");
	}
}

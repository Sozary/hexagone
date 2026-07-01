import { Order } from "../model/order";

export class PaymentService {
	async pay(order: Order) {
		console.log("Paiement accepté");
	}
}

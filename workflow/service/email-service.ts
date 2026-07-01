import { Order } from "../model/order";

export class EmailService {
	async sendConfirmation(order: Order) {
		console.log("Email envoyé");
	}
}

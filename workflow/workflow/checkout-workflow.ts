import { Order } from "../model/order";
import { OrderService } from "../service/order-service";
import { PaymentService } from "../service/payment-service";
import { KitchenService } from "../service/kitchen-service";
import { EmailService } from "../service/email-service";

export class CheckoutWorkflow {
	constructor(
		private orderService: OrderService,
		private paymentService: PaymentService,
		private kitchenService: KitchenService,
		private emailService: EmailService,
	) {}

	async checkout(order: Order) {
		await this.orderService.create(order);

		await this.paymentService.pay(order);

		await this.kitchenService.sendToKitchen(order);

		await this.emailService.sendConfirmation(order);

		return order;
	}
}

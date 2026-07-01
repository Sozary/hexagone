import { Order } from "../model/order";
import { CheckoutWorkflow } from "../workflow/checkout-workflow";

export class OrderController {
	constructor(private checkoutWorkflow: CheckoutWorkflow) {}

	async checkout(order: Order) {
		return this.checkoutWorkflow.checkout(order);
	}
}

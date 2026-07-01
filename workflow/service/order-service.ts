import { Order } from "../model/order";
import { OrderRepository } from "../repository/order-repository";

export class OrderService {
	constructor(private orderRepository: OrderRepository) {}

	async create(order: Order) {
		await this.orderRepository.save(order);
		return order;
	}
}

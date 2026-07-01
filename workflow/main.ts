import { OrderController } from "./controller/order-controller";
import { CheckoutWorkflow } from "./workflow/checkout-workflow";
import { OrderService } from "./service/order-service";
import { PaymentService } from "./service/payment-service";
import { KitchenService } from "./service/kitchen-service";
import { EmailService } from "./service/email-service";
import { OrderRepository } from "./repository/order-repository";

const orderRepository = new OrderRepository();

const orderService = new OrderService(orderRepository);
const paymentService = new PaymentService();
const kitchenService = new KitchenService();
const emailService = new EmailService();

const checkoutWorkflow = new CheckoutWorkflow(
	orderService,
	paymentService,
	kitchenService,
	emailService,
);

const orderController = new OrderController(checkoutWorkflow);

orderController.checkout({
	customerEmail: "client@example.com",
	items: ["Pizza", "Coca"],
});

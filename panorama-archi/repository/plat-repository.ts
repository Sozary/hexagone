import { Plat } from "../model/plat";
import { PlatRepositoryPort } from "../service/plat-service";

export class PlatRepository implements PlatRepositoryPort {
	private plats: Plat[] = [
		{ id: 1, name: "Pizza", description: "Delicious cheese pizza", price: 10 },
		{ id: 2, name: "Burger", description: "Juicy beef burger", price: 8 },
		{ id: 3, name: "Pasta", description: "Creamy Alfredo pasta", price: 12 },
	];

	getAllPlats(): Plat[] {
		return this.plats;
	}

	getPlatById(id: number): Plat | undefined {
		return this.plats.find((plat) => plat.id === id);
	}

	getPlatsCheaperThan(price: number): Plat[] {
		return this.plats.filter((plat) => plat.price < price);
	}
}

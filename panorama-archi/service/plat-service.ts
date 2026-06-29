import { Plat } from "../model/plat";

export interface PlatRepositoryPort {
	getAllPlats(): Plat[];
	getPlatById(id: number): Plat | undefined;
}

export class PlatService {
	constructor(private platRepository: PlatRepositoryPort) {}

	getAllPlats() {
		return this.platRepository.getAllPlats();
	}
	getPlatById(id: number) {
		return this.platRepository.getPlatById(id);
	}
	getPlatByIsd(ids: number[]) {
		const plats: Plat[] = [];
		for (const i of ids) {
			const plat = this.platRepository.getPlatById(i);
			if (plat) {
				plats.push(plat);
			}
		}
		return plats;
	}
}

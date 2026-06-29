import { PlatService } from "../../service/plat-service";
import { PlatView } from "../views/plat-view";

export class PlatController {
	constructor(
		private platService: PlatService,
		private view: PlatView,
	) {}

	// api
	getAllPlats() {
		const plats = this.platService.getAllPlats();
		return this.view.toJson(plats);
	}
	getAllPlatsByIds(ids: number[]) {
		let result = ids.length > 0 ? this.platService.getPlatByIsd(ids) : [];
		return this.view.toHtml(result);
	}
}

import { Plat } from "../../model/plat";

export class PlatView {
	toHtml(plats: Plat[]): string {
		let html = "<ul>";
		for (const plat of plats) {
			html += `<li>${plat.name} - ${plat.description} - $${plat.price}</li>`;
		}
		html += "</ul>";
		return html;
	}
	toJson(plats: Plat[]): string {
		return JSON.stringify(plats);
	}
}

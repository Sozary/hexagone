import { PlatController } from "./presentation/controller/plat-controller";
import { Plat } from "./model/plat";
import { PlatRepository } from "./repository/plat-repository";
import { PlatRepositoryPort, PlatService } from "./service/plat-service";
import { PlatView } from "./presentation/views/plat-view";

const myView = new PlatView();

const frigo = new PlatRepository();
const cuisine = new PlatService(frigo);
const salle = new PlatController(cuisine, myView);

console.log(salle.getAllPlats());
console.log(salle.getAllPlatsByIds([1]));

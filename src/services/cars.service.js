import {carsAxiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    allCar: () => carsAxiosService.get(urls.carAPI.cars),
    create: (car) => carsAxiosService.post(urls.carAPI.cars, car),
    updateCar: (id, car) => carsAxiosService.put(urls.carAPI.byId(id), car),
    deleteCar: (id) => carsAxiosService.delete(urls.carAPI.byId(id))
}
export {
    carsService
}

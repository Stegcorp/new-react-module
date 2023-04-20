
import {urls} from "../configs/urls";
import {carAxiosService} from "./axios.service";

const carService= {
    getAll:()=>carAxiosService.get(urls.carsAPI.cars),
    create:(car)=> carAxiosService.post(urls.carsAPI.cars,car),
    getById:(id)=>carAxiosService.get(urls.carsAPI.cars+'/'+`${id}`),
    deleteCar:(id)=>carAxiosService.delete(urls.carsAPI.cars+'/'+`${id}`),
    updateById:(id,car)=>carAxiosService.put(urls.carsAPI.cars+'/'+`${id}`,car)
}

export {
    carService
}

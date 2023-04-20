import {placeAxiosService} from "./axios.service";
import {urls} from "../configs/urls";


const usersService={
    allUsers:()=>placeAxiosService(urls.placeAPI.users),
    create:(user)=>placeAxiosService.post(urls.placeAPI.users,user)
}

export {
    usersService
}

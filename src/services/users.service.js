import {axiosService} from "./axios.service";
import {urls} from "../constans/urls";

class UsersService {
    getAll(){
        return axiosService.get(urls.users)
    }
}

export const usersService = new UsersService()

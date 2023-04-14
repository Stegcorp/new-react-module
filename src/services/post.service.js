import {axiosService} from "./axios.service";
import {urls} from "../constans/urls";

export const postService={
    getAll:() => axiosService.get(urls.posts),
    getById:(userId) => axiosService.get(urls.users+'/'+ `${userId}`+'/posts')
}


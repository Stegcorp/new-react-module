import axiosService from "./axios.service";
import {urls} from "../configs/urls";

const todosService = {
    AllGets:()=> axiosService(urls.todos)
}

export {
    todosService
}

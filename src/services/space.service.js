import {axiosService} from "./axios.service";

const spaceService=axiosService.get('https://api.spacexdata.com/v3/launches/')


export {spaceService}

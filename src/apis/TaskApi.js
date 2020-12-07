import { Constants } from "../constants/Constant";
import { http } from "./BaseApi";

export class TaskApi {
    static login(id, name){
        const endpoint = '/login';

        const data = {
            name: name,
            apiKey: id
        };

        return http.post(endpoint, data);
    }

    static getDashboardData(){
        const endpoint = '/dashboard';

        return http.get(endpoint);
    }

    static getAllTask(){
        const endpoint = '/tasks';

        return http.get(endpoint);
    }

    static createNewTask(name){
        const endpoint = '/tasks';
        const data = {
            name: name
        };

        return http.post(endpoint, data);
    }

    static updateTask(id, name, isCompleted){
        const endpoint = `/tasks/${id}`;

        const data = {
            name: name,
            completed: isCompleted
        };

        return http.put(endpoint, data);
    }

    static deleteTask(id){
        const endpoint = `/tasks/${id}`;


        return http.delete(endpoint);
    }
}
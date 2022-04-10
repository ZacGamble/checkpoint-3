import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {

    taskTrack(){
        
    }
    removeTask(taskId){
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
        // if(ProxyState.tasks.splice(t => t.id !==taskId)){
            
        // }
    }
    addTask(taskData){
        let task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

}

export const tasksService = new TasksService();
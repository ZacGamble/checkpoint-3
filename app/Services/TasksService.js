import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
let Numerator = 0
class TasksService {
    taskTrack(taskId){
        
        if(ProxyState.tasks.find(t => t.id == taskId)){
    
            let check = taskId
            // let cb = document.getElementById('done');
            // ProxyState.checks = [...ProxyState.checks, check]
            // ProxyState.tasks = ProxyState.tasks.at(t => t.id !== taskId)
            // console.log('hi from TS');
        }
    }
    removeTask(taskId){
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
    }
    addTask(taskData){
        console.log(taskData);
        let task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

}

export const tasksService = new TasksService();
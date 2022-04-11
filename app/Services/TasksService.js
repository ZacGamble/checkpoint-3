import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
let Numerator = 0
class TasksService {
    taskTrack(taskId){
        let foundTask = ProxyState.tasks.find(t => t.id == taskId)
            foundTask.isComplete = !foundTask.isComplete
            ProxyState.tasks = ProxyState.tasks
         
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
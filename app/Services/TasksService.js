import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService {
    addTask(taskData){
        const task = new Task(taskData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

    removeTask(){

    }
}

export const tasksService = new TasksService();
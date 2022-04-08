import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService {
    addTask(listData){
        const task = new Task(listData)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

    removeTask(){

    }
}

export const tasksService = new TasksService();
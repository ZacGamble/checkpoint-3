import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js"


function _drawTasks() {
    let tasks = ProxyState.tasks;
    let tasksTemplate = ''
    tasks.forEach(t => tasksTemplate += t.TaskTemplate)
    document.getElementById('task-template').innerHTML = tasksTemplate
}

export class TasksController {
    constructor(){
        ProxyState.on('tasks', _drawTasks)
        _drawTasks()
    }
    addTask(){
        window.event.preventDefault();
        
        try {
            /**@type {HTMLFormElement} */
            // @ts-ignore
            let form = window.event.target
            
            const listData = {           
                // @ts-ignore
                name: form.name.value,
            }
            
            console.log('addTask button', listData);
        tasksService.addTask(listData)
 
        } catch (error) {
            console.error("[list form error]", error) 
        }
    }
}

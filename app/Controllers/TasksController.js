import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js"

// PLEASE EXPLAIN ONE TO MANY a.k.a. PARENT TO CHILDREN RELATIONSHIP!!!
// Getting the "tasks" to render correctly was painful to figure out.

// function _drawTasks(){
//     let tasks = ProxyState.tasks;
//     let tasksTemplate = ''
//     tasks.forEach(t => tasksTemplate += t.Template)
//     document.getElementById('task-template').innerHTML = tasksTemplate
// }

export class TasksController {

    taskTrack(){
        console.log("checkbox");
    }
    addTask(listId){
        window.event.preventDefault();
        try {
            /**@type {HTMLFormElement} */
            // @ts-ignore
            const form = window.event.target
            
            const taskData = {           
                listId,
                name: form.task.value
            }
         
        tasksService.addTask(taskData)
 
        } catch (error) {
            console.error("[list form error]", error) 
        }
    }
   async removeTask(taskId){
       if(await Pop.confirm()){

           tasksService.removeTask(taskId) 
           Pop.toast('Removed Task', 'success')
        } 
    }
}

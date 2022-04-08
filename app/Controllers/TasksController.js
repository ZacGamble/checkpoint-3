import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { Pop } from "../Utils/Pop.js"


export class TasksController {
    addTask(listId){
        window.event.preventDefault();
        
        try {
            /**@type {HTMLFormElement} */
            // @ts-ignore
            let form = window.event.target
            
            const listData = {           
                listId,
                
                name: form.form.value,
            }
            
            console.log('addTask button', listData);
         
        tasksService.addTask(listData)
 
        } catch (error) {
            console.error("[list form error]", error) 
        }
    }
}

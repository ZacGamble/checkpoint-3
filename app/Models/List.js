import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { Task } from "./Task.js";
// import { taskTrack() } from "../Services/TasksService.js";

export class List {
    constructor(data){
        this.id = data.id || generateId()
        this.name = data.name
        this.color = data.color
    }

    get Tasks() {
      let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
      let template = ''
      tasks.forEach(t => template += t.Template)
      return template
    }
    get Numerator() {
      let listTask = ProxyState.tasks.filter(t => t.listId == this.id)
      let numerator = 0
      //LOGIC FOR TASK CHECKBOXES?
      var checkboxes = document.querySelectorAll("input[type=checkbox][name=done]");
      return numerator
    }

    get Denominator() {
        let listTask = ProxyState.tasks.filter(t => t.listId == this.id)
        let denominator = 0
        listTask.forEach(t => denominator ++)
        return denominator 
    }

    get Template(){
        return `
        <div class="col-md-4 col-lg-3 d-flex flex-column bg-light border m-4">
            <div>
              <div class="text-light p-2" style="background-color: ${this.color}">
                <div class="d-flex justify-content-between">
                 <h4>${this.name}</h4>
                 <span onclick="app.listsController.removeList('${this.id}')" class="p-2 mdi mdi-delete on-hover pointer bg-light text-dark rounded">Delete</span>
                </div>
               <h5 class='text-center'>${this.Numerator}/${this.Denominator}</h5>
              </div>
            </div>
          
            <div class="d-flex flex-column p-2">
              <ul id="task-template" class="text-break list-group" style="list-style-type: none;">
               ${this.Tasks}
              </ul>
            </div>
          
          <form onsubmit="app.tasksController.addTask('${this.id}')" class="d-flex justify-content-between">
            <input style="max-width: 75%;" type="text" placeholder="Add task..." name="task" id="task" minlength="3" maxlength="50" required>
            <button type="submit" name="checked" class="p-2 on-hover bg-success">+</button>
          </form>
            
      </div>
        
        `
    }
}
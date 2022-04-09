import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
    constructor(data){
        this.id = generateId() || data.id
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
      if(2 > 1){ //LOGIC FOR TASK CHECKBOXES?
        listTask.forEach(t => numerator ++)
      }

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
              <div class="text-light" style="background-color: ${this.color}">
              <div class="d-flex justify-content-between">
              <h4>${this.name}</h4>
              <span onclick="app.listsController.removeList('${this.id}')" class="p-2 mdi mdi-delete on-hover">Trash</span>
              </div>
              <h5 class='text-center'>numerator/${this.Denominator}</h5>
              </div>
            </div>
          
            <div class="d-flex flex-column p-2">
              <ul id="task-template" class="text-break" style="text-decoration: none;">
               ${this.Tasks}
              </ul>
            </div>
          
          <form onsubmit="app.tasksController.addTask('${this.id}')" class="d-flex justify-content-between">
            <input style="max-width: 75%;" type="text" placeholder="Add task..." name="task" id="task" minlength="3" maxlength="50" required>
            <button type="submit" class="p-2 on-hover bg-success">+</button>
          </form>
            
      </div>
        
        `
    }
}
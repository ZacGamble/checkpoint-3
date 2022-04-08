import { generateId } from "../Utils/generateId.js";

export class List {
    constructor(data){
        this.id = generateId() || data.id
        this.name = data.name
        this.color = data.color
    }

    get ListTemplate(){
        return `
      <div class="col-md-4 col-lg-3 d-flex flex-column bg-light border ms-3">
        <div>
         <div class="text-light" style="background-color: ${this.color}">
           <h4>${this.name}</h4>
           <h5>2/4</h5>
           <div class="d-flex justify-content-end">
           <span onclick="app.listsController.removeList()" class="p-2 mdi mdi-delete on-hover">Trash</span>
          </div>
         </div>
        </div>
       
        <div id="task-template" class="d-flex flex-column p-2 m-2">
        </div>
          
           <form onsubmit="app.tasksController.addTask('${this.id}')" class="d-flex justify-content-between">
           <input style="max-width: 75%;" type="text" placeholder="Add task..." name="task-name" id="task-name" minlength="3" maxlength="50">
           <button type="submit" class="p-2 on-hover bg-success">+</button>
         </form>
           
      </div>
        
        `
    }
}
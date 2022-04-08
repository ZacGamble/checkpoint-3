import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { Pop } from "../Utils/Pop.js"


function _drawLists() {
    let lists = ProxyState.lists;
    let listsTemplate = ''
    lists.forEach(l => listsTemplate += l.ListTemplate)
    document.getElementById('app').innerHTML = listsTemplate
}
export class ListsController {
    constructor(){
        ProxyState.on('lists', _drawLists);
        ProxyState.on('tasks', _drawLists)
        _drawLists();
    }
    addList(){
        window.event.preventDefault();
        try {
            /**@type {HTMLFormElement} */
        // @ts-ignore
        let form = window.event.target

        const listData = {           
            // @ts-ignore
            name: form.name.value,
            color: form.color.value
        }

        listsService.addList(listData)
 
        } catch (error) {
            console.error("[list form error]", error) 
        }
        // console.log('sup from controller');
    }

    removeList(){
        try {
            console.log('delete button firing', name);
            listsService.removeList(id)
        } catch (error) {
            console.error("couldn't delete list")
            
        }
    }

}
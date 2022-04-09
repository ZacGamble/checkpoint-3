import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { Pop } from "../Utils/Pop.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _drawLists() {
    let lists = ProxyState.lists;
    let listsTemplate = ''
    lists.forEach(l => listsTemplate += l.Template)
    document.getElementById('app').innerHTML = listsTemplate
}
export class ListsController {
    constructor(){
        ProxyState.on('lists', _drawLists);
        ProxyState.on('tasks', _drawLists);
        ProxyState.on('lists', saveState);
        ProxyState.on('tasks', saveState);
        loadState()
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

    async removeList(listId){
     if (await Pop.confirm()) {
        listsService.removeList(listId)
        Pop.toast('List Removed', 'success')
     }
    }

}
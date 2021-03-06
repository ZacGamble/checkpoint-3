import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
    addList(listData){ 
        const list = new List(listData)
        ProxyState.lists = [...ProxyState.lists, list]
        
    }

    removeList(listId){
        ProxyState.lists = ProxyState.lists.filter(l => l.id !== listId)
    }
}

export const listsService = new ListsService();
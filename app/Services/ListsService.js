import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
    addList(listData){ 
        const list = new List(listData)
        ProxyState.lists = [list, ...ProxyState.lists]
    }

    removeList(listId){
        
    }
}

export const listsService = new ListsService();
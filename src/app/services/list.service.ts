import { Injectable } from '@angular/core';
import { ItemList } from '../models/listModel';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  API_URL='http://localhost:4000/api/tasks'

  

  //En caso de que hubiera una Api
  
  getItemList(){
    return this.http.get<ItemList[]>(this.API_URL)
  }

  setItemList(Item:ItemList){
    return this.http.post(this.API_URL, Item )
  }

  updateItemList(id:string, item:ItemList){
    return this.http.put(`${this.API_URL}/${id}`,item)
  }

  deleteItemList(_id:string){
    return this.http.delete(`${this.API_URL}/${_id}`)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemList } from '../models/listModel';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  
  Items:ItemList[];
  
  taskItem:ItemList = {
    task : ''
  }

  constructor(public listItem:ListService, private router:Router) { }

  ngOnInit() {
    this.getItemList()
  }
 
  //interactuando con La API
  getItemList(){
    this.listItem.getItemList().subscribe( res => {
      this.Items = res;
    })
  }


  setItemList(){
    this.listItem.setItemList(this.taskItem)
      .subscribe(res => this.getItemList(),
                 err => console.log(err))
  }
  
 


  deleteTask(_id:string){
    this.listItem.deleteItemList(_id)
      .subscribe( 
        (res) => {
          this.getItemList()
        }, 
        err => console.log(err))
  }

  
  
  
  

  

}

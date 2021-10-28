import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FolderPage } from '../folder/folder.page';
import { ItemList } from '../models/listModel';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  constructor(public list:ListService, public router:Router) { }
  
  newItem:ItemList={
    task:''
  }

  ngOnInit() {
  }
  //interactuando con datos locales
  agregarTarea(){
      this.list.setItemList(this.newItem).subscribe(res =>{
        console.log(res);
      })
      this.router.navigate(['folder/Inbox'])     
      
  }

  
}

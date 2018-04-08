import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Note} from "../../models/domain/note.interface";
import {Tag} from "../../models/domain/tag.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: Note[]
  tags: Tag[]

  constructor(public navCtrl: NavController) {
    this.notes = [
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'red'}, {id: 'sdfsf', name:'sdasdasd', color: 'red'},]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
      {id: 'dsfsdf', text: 'askdka', title: 'sdasdas', createDate: 'sdfdsfds', tags: [{id: 'sdfsf', name:'sdasdasd', color: 'black'}]},
    ];

    this.tags = [
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
      {id: 'asfasf', color: 'red', name: 'foo'},
    ];
  }

}

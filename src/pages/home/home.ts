import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Note} from "../../models/domain/note.interface";
import {Tag} from "../../models/domain/tag.interface";
import {Page} from "../../models/page.interface";
import {PageAbstract} from "../page.abstract";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends PageAbstract{

  page: Page
  notes: Note[]
  tags: Tag[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl, navParams)

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

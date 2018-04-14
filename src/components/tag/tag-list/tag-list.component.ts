import {Component, OnInit} from "@angular/core";
import {Tag} from "../../../models/domain/tag.interface";
import {EditTagModal} from "../../modals/edit-tag/_edit-tag.modal";
import {ModalController} from "ionic-angular";

@Component({
  selector: 'tag-list',
  templateUrl: 'tag-list.html'
})
export class TagListComponent implements OnInit {

  tags: Tag[]

  constructor(private modalController: ModalController) {
    this.tags = [
      {id: '1', color: 'red', name: 'foo'},
      {id: '2', color: 'red', name: 'foo'},
      {id: '3', color: 'red', name: 'foo'},
      {id: '4', color: 'red', name: 'foo'},
      {id: '5', color: 'red', name: 'foo'},
      {id: '6', color: 'red', name: 'foo'},
      {id: '7', color: 'red', name: 'foo'},
      {id: '8', color: 'red', name: 'foo'},
      {id: '9', color: 'red', name: 'foo'},
      {id: '10', color: 'red', name: 'foo'},
      {id: '11', color: 'red', name: 'foo'},
      {id: '12', color: 'red', name: 'foo'},
      {id: '13', color: 'red', name: 'foo'},
      {id: '14', color: 'red', name: 'foo'},
      {id: '15', color: 'red', name: 'foo'},
      {id: '16', color: 'red', name: 'foo'},
      {id: '17', color: 'red', name: 'foo'},
      {id: '18', color: 'red', name: 'foo'},
    ]
  }

  edit(tag?: Tag) {
    let modal = this.modalController.create(EditTagModal, {model: tag})

    modal.onDidDismiss(data => {
      console.log(data)
    })

    modal.present()
  }

  delete(tag: Tag) {
    this.tags = this.tags.filter(item => item.id !== tag.id)
  }

  view(tag: Tag) {
    console.log(tag)
  }

  ngOnInit(): void {
  }
}

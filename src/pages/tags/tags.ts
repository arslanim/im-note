import {PageAbstract} from "../page.abstract";
import {ModalController, NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
import {Tag} from "../../models/domain/tag.interface";
import {EditTagModal} from "../../components/modals/edit-tag/_edit-tag.modal";

@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html'
})
export class TagsPage extends PageAbstract {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalController: ModalController
  ) {
    super(navCtrl, navParams)
  }

  openTagEditModal(tag?: Tag) {
    let modal = this.modalController.create(EditTagModal, {tag: tag})

    modal.present()
  }
}

import {PageAbstract} from "../page.abstract";
import {NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
  selector: 'page-tags',
  templateUrl: 'tags.html'
})
export class TagsPage extends PageAbstract {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl, navParams)
  }
}

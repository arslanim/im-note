import {PageInterface} from "./page.interface";
import {Page} from "../models/page.interface";
import {NavController, NavParams} from "ionic-angular";

export abstract class PageAbstract implements PageInterface {
  page: Page

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.initPage()
  }

  initPage(): void {
    this.page = this.navParams.get('page')
  }
}

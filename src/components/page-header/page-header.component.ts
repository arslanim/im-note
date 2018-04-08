import {Component, Input, OnInit} from "@angular/core";
import {Page} from "../../models/page.interface";

@Component({
  selector: 'page-header',
  templateUrl: 'header.html'
})
export class PageHeaderComponent implements OnInit {

  @Input() page: Page

  constructor() {}

  ngOnInit(): void {
  }
}

import {Component, Input, OnInit} from "@angular/core";
import {Tag} from "../../../models/domain/tag.interface";

@Component({
  selector: 'tag-item',
  templateUrl: 'tag-item.html'
})
export class TagItemComponent implements OnInit{

  @Input() tag: Tag

  constructor() {}

  ngOnInit(): void {
  }
}

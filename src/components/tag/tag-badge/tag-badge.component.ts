import {Input, OnInit, Component} from "@angular/core";
import {Tag} from "../../../models/domain/tag.interface";

@Component({
  selector: 'tag-badge',
  templateUrl: 'tag-badge.html'
})
export class TagBadgeComponent implements OnInit {

  @Input() tag: Tag

  constructor() {}

  ngOnInit(): void {
  }
}

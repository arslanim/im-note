import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Tag} from "../../../models/domain/tag.interface";
import {OnDelete} from "../../../common/item-actions/action-delete.interface";
import {OnView} from "../../../common/item-actions/action-view.interface";

@Component({
  selector: 'tag-item',
  templateUrl: 'tag-item.html'
})
export class TagItemComponent implements OnInit, OnDelete, OnView {

  @Input() tag: Tag
  @Output() onDelete = new EventEmitter<Tag>()
  @Output() onView = new EventEmitter<Tag>()
  @Output() onEdit = new EventEmitter<Tag>()

  constructor() {}

  edit(tag: Tag): void {
    this.onEdit.emit(tag)
  }

  delete(tag: Tag): void {
    this.onDelete.emit(tag)
  }

  view(tag: Tag): void {
    this.onView.emit(tag)
  }

  ngOnInit(): void {
  }
}

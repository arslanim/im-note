import {EventEmitter, Output} from "@angular/core";

export interface OnDelete {
  onDelete: EventEmitter<Object>
  delete(item: Object): void
}

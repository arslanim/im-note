import {EventEmitter} from "@angular/core";

export interface OnView {
  onView: EventEmitter<Object>
  view(item: Object): void
}

import {Component, Input, OnInit} from "@angular/core";
import {Note} from "../../models/domain/note.interface";

@Component({
  selector: 'note-item',
  templateUrl: 'note-item.html'
})
export class NoteItemComponent implements OnInit {
  @Input() noteItem: Note

  constructor() {}

  ngOnInit(): void {
  }
}

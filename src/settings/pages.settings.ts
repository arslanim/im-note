import {NotesPage} from "../pages/notes/notes";
import {HomePage} from "../pages/home/home";
import {ListPage} from "../pages/list/list";

export const PAGE_SETTINGS = [
  {title: 'Home', component: HomePage, isRoot: true},
  {title: 'Notes', component: NotesPage, isRoot: false},
  {title: 'List', component: ListPage, isRoot: false},
]

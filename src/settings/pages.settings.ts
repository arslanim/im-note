import {NotesPage} from "../pages/notes/notes";
import {HomePage} from "../pages/home/home";
import {ListPage} from "../pages/list/list";
import {TagsPage} from "../pages/tags/tags";

export const PAGE_SETTINGS = [
  {title: 'Home', component: HomePage, isRoot: true},
  {title: 'Notes', component: NotesPage, isRoot: false},
  {title: 'Tags', component: TagsPage, isRoot: false},
  {title: 'List', component: ListPage, isRoot: false},
]

import {Tag} from "./tag.interface";

export interface Note {
  id: string
  title: string
  text: string
  tags: Tag[]
  createDate: string
}

import {Component} from "@angular/core"
import {NavParams, ViewController} from "ionic-angular"
import {Tag} from "../../../models/domain/tag.interface"
import {isUndefined} from "ionic-angular/es2015/util/util"
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms"
import {BaseModal} from "../../../models/base.modal"

@Component({
  selector: 'edit-tag-modal',
  templateUrl: '_edit-tag-modal.html'
})
export class EditTagModal extends BaseModal {
  model: Tag;

  name: FormControl
  color: FormControl

  constructor(
    protected params: NavParams,
    protected viewController: ViewController,
    protected formBuilder: FormBuilder
  ) {
    super(viewController);

    this.model = params.get('model');

    //if insert
    if (isUndefined(this.model)) {
      this.model = <Tag>{}
    }

    //prepare form
    this.name = new FormControl(this.model.name, Validators.required)
    this.color = new FormControl(this.model.color)
    this.form = this.formBuilder.group({
      'name': this.name,
      'color': this.color
    })
  }

  submit(form: FormGroup) {
    this.model.name = form.controls['name'].value
    this.model.color = form.controls['color'].value

    this.response.action = isUndefined(this.model.id) ? this.ACTION_INSERT : this.ACTION_EDIT
    this.response.model = this.model

    this.dismiss(this.response)
  }
}

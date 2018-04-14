import {ResponseModal} from "./response-modal.interface";
import {FormGroup} from "@angular/forms";
import {ViewController} from "ionic-angular";

export abstract class BaseModal {

  readonly ACTION_EDIT = 'action_edit';
  readonly ACTION_INSERT = 'action_insert';
  readonly ACTION_DISMISS = 'action_dismiss';

  response: ResponseModal = <ResponseModal>{}
  form: FormGroup

  protected abstract model: Object

  constructor(protected viewController: ViewController) {
    this.response.action = this.ACTION_DISMISS
  }

  dismiss(response: ResponseModal) {
    this.viewController.dismiss(response)
  }

  protected abstract submit(form: FormGroup)
}

import { Component, OnInit } from '@angular/core';
import { SuiModal, ComponentModalConfig, ModalSize } from "ng2-semantic-ui"

interface IConfirmModalContext {
    title:string;
    question:string;
}


@Component({
  selector: 'confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  constructor(public modal:SuiModal<IConfirmModalContext, void, void>) {}

  ngOnInit() {
  }

}

export class ConfirmModal extends ComponentModalConfig<IConfirmModalContext, void, void> {
    constructor(title:string, question:string) {
        super(ConfirmModalComponent, { title, question });

        this.isClosable = false;
        this.transitionDuration = 200;
        this.size = ModalSize.Small;
    }
}
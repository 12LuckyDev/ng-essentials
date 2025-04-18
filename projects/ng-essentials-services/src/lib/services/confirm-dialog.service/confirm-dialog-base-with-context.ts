import { Injectable } from '@angular/core';
import { WithContext } from '../../context/with-context';
import { ConfirmDialogBase } from './confirm-dialog-base';
import { ContextedConfirmDialogService } from './contexted-confirm-dialog.service';
import { ConfirmDialogBaseMethods } from './confirm-dialog-base-methods';

@Injectable()
export abstract class ConfirmDialogBaseWithContext<C extends {} = {}>
  extends ConfirmDialogBase<C>
  implements WithContext<ConfirmDialogBaseMethods<C>>
{
  public withContext(context: string): ConfirmDialogBaseMethods<C> {
    return new ContextedConfirmDialogService(this, context);
  }
}

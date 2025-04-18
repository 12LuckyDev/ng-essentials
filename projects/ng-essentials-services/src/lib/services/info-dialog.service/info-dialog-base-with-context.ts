import { WithContext } from '../../context/with-context';
import { InfoDialogBase } from './info-dialog-base';
import { ContextedInfoDialogService } from './contexted-info-dialog.service';
import { Injectable } from '@angular/core';
import { InfoDialogBaseMethods } from './info-dialog-base-methods';

@Injectable()
export abstract class InfoDialogBaseWithContext<C extends {} = {}>
  extends InfoDialogBase<C>
  implements WithContext<InfoDialogBaseMethods<C>>
{
  public withContext(context: string): InfoDialogBaseMethods<C> {
    return new ContextedInfoDialogService(this, context);
  }
}

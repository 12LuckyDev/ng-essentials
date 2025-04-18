import { Injectable } from '@angular/core';
import { WithContext } from '../../context/with-context';
import { ContextedToastService } from './contexted-toast.service';
import { ToastBase } from './toast-base';
import { ToastBaseMethods } from './toast-base-methods';

@Injectable()
export abstract class ToastBaseWithContext<C extends {} = {}>
  extends ToastBase<C>
  implements WithContext<ToastBaseMethods<C>>
{
  public withContext(context: string): ToastBaseMethods<C> {
    return new ContextedToastService(this, context);
  }
}

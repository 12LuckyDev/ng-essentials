import { Observable } from 'rxjs';
import { Contexted } from '../../context/contexted.service';
import { InfoDialogBaseMethods } from './info-dialog-base-methods';

export class ContextedInfoDialogService<C extends {} = {}>
  extends Contexted
  implements InfoDialogBaseMethods<C>
{
  constructor(private _baseService: InfoDialogBaseMethods<C>, context: string) {
    super(context);
  }

  public open(title: string, message: string, config?: C): Observable<void> {
    return this._baseService.open(
      this.contextualize(title),
      this.contextualize(message),
      config
    );
  }

  public smartOpen(key: string, config?: C): Observable<void> {
    return this._baseService.smartOpen(this.contextualize(key), config);
  }
}

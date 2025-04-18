import { Observable } from 'rxjs';
import { Contexted } from '../../context/contexted.service';
import { ConfirmDialogBaseMethods } from './confirm-dialog-base-methods';

export class ContextedConfirmDialogService<C extends {} = {}>
  extends Contexted
  implements ConfirmDialogBaseMethods<C>
{
  constructor(
    private _baseService: ConfirmDialogBaseMethods<C>,
    context: string
  ) {
    super(context);
  }

  public open(title: string, message: string, config?: C): Observable<boolean> {
    return this._baseService.open(
      this.contextualize(title),
      this.contextualize(message),
      config
    );
  }

  public smartOpen(key: string, config?: C): Observable<boolean> {
    return this._baseService.smartOpen(this.contextualize(key), config);
  }

  public confirm(
    title: string,
    message: string,
    config?: C | undefined
  ): Observable<void> {
    return this._baseService.confirm(
      this.contextualize(title),
      this.contextualize(message),
      config
    );
  }

  public smartConfim(key: string, config?: C | undefined): Observable<void> {
    return this._baseService.smartConfim(this.contextualize(key), config);
  }
}

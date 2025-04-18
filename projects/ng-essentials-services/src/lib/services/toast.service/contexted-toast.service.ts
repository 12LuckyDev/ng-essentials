import { Contexted } from '../../context/contexted.service';
import { ToastBaseMethods } from './toast-base-methods';

export class ContextedToastService<C extends {} = {}>
  extends Contexted
  implements ToastBaseMethods<C>
{
  constructor(private _baseService: ToastBaseMethods<C>, context: string) {
    super(context);
  }

  public open(title: string, message: string, config?: C): void {
    this._baseService.open(
      this.contextualize(title),
      this.contextualize(message),
      config
    );
  }

  public success(title: string, message: string, config?: C): void {
    this._baseService.success(
      this.contextualize(title),
      this.contextualize(message),
      config
    );
  }

  public smartSuccess(key: string, config?: C): void {
    this._baseService.smartSuccess(this.contextualize(key), config);
  }

  public warning(title: string, message: string, config?: C): void {
    this._baseService.warning(
      this.contextualize(title),
      this.contextualize(message),
      config
    );
  }

  public smartWarning(key: string, config?: C): void {
    this._baseService.smartWarning(this.contextualize(key), config);
  }

  public error(title: string, message: string, config?: C): void {
    this._baseService.error(
      this.contextualize(title),
      this.contextualize(message),
      config
    );
  }

  public smartError(key: string, config?: C): void {
    this._baseService.smartError(this.contextualize(key), config);
  }

  public smartResult(key: string, result: boolean, config?: C): void {
    this._baseService.smartResult(this.contextualize(key), result, config);
  }
}

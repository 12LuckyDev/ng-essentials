import { filter, Observable, of, switchMap } from 'rxjs';
import { ConfirmDialogBaseMethods } from './confirm-dialog-base-methods';
import { inject, Injectable } from '@angular/core';
import { NG_ESSENTIALS_SERVICES } from '../../settings-token/settings.token';
import { buildConfirmDialogSettings } from './build-confirm-dialog-settings';

@Injectable()
export abstract class ConfirmDialogBase<C extends {} = {}>
  implements ConfirmDialogBaseMethods<C>
{
  private _settings: { title: string; message: string };

  constructor() {
    this._settings = buildConfirmDialogSettings(inject(NG_ESSENTIALS_SERVICES));
  }

  public abstract open(
    title: string,
    message: string,
    config?: C
  ): Observable<boolean>;

  public smartOpen(key: string, config?: C): Observable<boolean> {
    return this.open(
      `${key}.${this._settings.title}`,
      `${key}.${this._settings.message}`,
      config
    );
  }

  public confirm(
    title: string,
    message: string,
    config?: C | undefined
  ): Observable<void> {
    return this.open(title, message, config).pipe(
      filter((confirmed) => confirmed),
      switchMap(() => of(void 0))
    );
  }

  public smartConfim(key: string, config?: C | undefined): Observable<void> {
    return this.confirm(
      `${key}.${this._settings.title}`,
      `${key}.${this._settings.message}`,
      config
    );
  }
}

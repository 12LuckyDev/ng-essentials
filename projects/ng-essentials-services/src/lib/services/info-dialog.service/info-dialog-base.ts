import { Observable } from 'rxjs';
import { InfoDialogBaseMethods } from './info-dialog-base-methods';
import { inject, Injectable } from '@angular/core';
import { buildInfoDialogSettings } from './build-info-dialog-settings';
import { NG_ESSENTIALS_SERVICES } from '../../settings-token/settings.token';

@Injectable()
export abstract class InfoDialogBase<C extends {} = {}>
  implements InfoDialogBaseMethods<C>
{
  private _settings: { title: string; message: string };

  constructor() {
    this._settings = buildInfoDialogSettings(inject(NG_ESSENTIALS_SERVICES));
  }

  public abstract open(
    title: string,
    message: string,
    config?: C
  ): Observable<void>;

  public smartOpen(key: string, config?: C): Observable<void> {
    return this.open(
      `${key}.${this._settings.title}`,
      `${key}.${this._settings.message}`,
      config
    );
  }
}

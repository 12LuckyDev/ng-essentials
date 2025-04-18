import { inject, Injectable } from '@angular/core';
import { ToastBaseMethods } from './toast-base-methods';
import { NG_ESSENTIALS_SERVICES } from '../../settings-token/settings.token';
import { buildToastSettings } from './build-toast-settings';

@Injectable()
export abstract class ToastBase<C extends {} = {}>
  implements ToastBaseMethods<C>
{
  private _settings: {
    title: string;
    message: string;
    success: string;
    error: string;
  };

  constructor() {
    this._settings = buildToastSettings(inject(NG_ESSENTIALS_SERVICES));
  }

  public abstract open(title: string, message: string, config?: C): void;

  public abstract success(title: string, message: string, config?: C): void;

  public abstract warning(title: string, message: string, config?: C): void;

  public abstract error(title: string, message: string, config?: C): void;

  public smartOpen(key: string, config?: C | undefined): void {
    this.open(
      `${key}.${this._settings.title}`,
      `${key}.${this._settings.message}`,
      config
    );
  }

  public smartSuccess(key: string, config?: C): void {
    this.success(
      `${key}.${this._settings.title}`,
      `${key}.${this._settings.message}`,
      config
    );
  }

  public smartWarning(key: string, config?: C): void {
    this.warning(
      `${key}.${this._settings.title}`,
      `${key}.${this._settings.message}`,
      config
    );
  }

  public smartError(key: string, config?: C): void {
    this.error(
      `${key}.${this._settings.title}`,
      `${key}.${this._settings.message}`,
      config
    );
  }

  public smartResult(key: string, result: boolean, config?: C): void {
    if (result) {
      this.success(
        `${key}.${this._settings.title}`,
        `${key}.${this._settings.success}`,
        config
      );
    } else {
      this.error(
        `${key}.${this._settings.title}`,
        `${key}.${this._settings.error}`,
        config
      );
    }
  }
}

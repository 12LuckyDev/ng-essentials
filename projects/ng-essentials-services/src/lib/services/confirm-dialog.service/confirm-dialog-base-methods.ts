import { Observable } from 'rxjs';

export interface ConfirmDialogBaseMethods<C extends {} = {}> {
  /**
   * Open confirmation dialog
   * @param title Key to title of the dialog
   * @param message Key to detailed message text
   * @param config Optional config
   * @returns Observable with result
   */
  open(title: string, message: string, config?: C): Observable<boolean>;

  /**
   * Open confirmation dialog smarted way, build title and message based on key and config token
   * @param key Prefix to keys of title and message
   * @param config Optional config
   * @returns Observable with result
   */
  smartOpen(key: string, config?: C): Observable<boolean>;

  /**
   * Open confirmation dialog and filter result only when confirm
   * @param title Key to title of the dialog
   * @param message Key to detailed message text
   * @param config Optional config
   * @returns Observable which call next only when dialog is confirmed
   */
  confirm(title: string, message: string, config?: C): Observable<void>;

  /**
   * Open confirmation dialog and filter result only when confirm
   * @param key Prefix to keys of title and message
   * @param config Optional config
   * @returns Observable which call next only when dialog is confirmed
   */
  smartConfim(key: string, config?: C): Observable<void>;
}

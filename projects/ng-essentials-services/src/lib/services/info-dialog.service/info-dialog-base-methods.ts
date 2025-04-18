import { Observable } from 'rxjs';

export interface InfoDialogBaseMethods<C extends {} = {}> {
  /**
   * Open info dialog
   * @param title Key to title of the dialog
   * @param message Key to detailed message text
   * @param config Optional config
   * @returns Observable which complete when dialog is closed
   */
  open(title: string, message: string, config?: C): Observable<void>;

  /**
   * Open info dialog smarted way, build title and message based on key and config token
   * @param key Prefix to keys of title and message
   * @param config Optional config
   * @returns Observable which complete when dialog is closed
   */
  smartOpen(key: string, config?: C): Observable<void>;
}

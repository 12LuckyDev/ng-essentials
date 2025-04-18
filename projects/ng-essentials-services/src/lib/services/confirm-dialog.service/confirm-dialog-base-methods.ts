import { Observable } from 'rxjs';

export interface ConfirmDialogBaseMethods<C extends {} = {}> {
  open(title: string, message: string, config?: C): Observable<boolean>;

  smartOpen(key: string, config?: C): Observable<boolean>;

  confirm(title: string, message: string, config?: C): Observable<void>;

  smartConfim(key: string, config?: C): Observable<void>;
}

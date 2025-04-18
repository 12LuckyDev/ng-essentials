import { Observable } from 'rxjs';

export interface ConfirmDialogBaseMethods<C extends {} = {}> {
  open(title: string, description: string, config?: C): Observable<boolean>;

  smartOpen(key: string, config?: C): Observable<boolean>;

  confirm(title: string, description: string, config?: C): Observable<void>;

  smartConfim(key: string, config?: C): Observable<void>;
}

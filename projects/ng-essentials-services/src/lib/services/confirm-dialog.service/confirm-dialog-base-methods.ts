import { Observable } from 'rxjs';

export interface ConfirmDialogBaseMethods<C extends {} = {}> {
  open(title: string, description: string, config?: C): Observable<boolean>;

  smartOpen(key: string, config?: C): Observable<boolean>;
}

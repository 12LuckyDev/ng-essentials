import { Observable } from 'rxjs';

export interface InfoDialogBaseMethods<C extends {} = {}> {
  open(title: string, message: string, config?: C): Observable<void>;

  smartOpen(key: string, config?: C): Observable<void>;
}

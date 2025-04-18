export interface ToastBaseMethods<C extends {} = {}> {
  open(title: string, message: string, config?: C): void;

  success(title: string, message: string, config?: C): void;

  warning(title: string, message: string, config?: C): void;

  error(title: string, message: string, config?: C): void;

  smartSuccess(key: string, config?: C): void;

  smartWarning(key: string, config?: C): void;

  smartError(key: string, config?: C): void;

  smartResult(key: string, result: boolean, config?: C): void;
}

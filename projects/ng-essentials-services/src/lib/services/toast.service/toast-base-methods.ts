export interface ToastBaseMethods<C extends {} = {}> {
  /**
   * Show toast
   * @param title Key to title of the toast
   * @param message Key to detailed message text
   * @param config Optional config
   */
  open(title: string, message: string, config?: C): void;

  /**
   * Show success toast
   * @param title Key to title of the toast
   * @param message Key to detailed message text
   * @param config Optional config
   */
  success(title: string, message: string, config?: C): void;

  /**
   * Show warning toast
   * @param title Key to title of the toast
   * @param message Key to detailed message text
   * @param config Optional config
   */
  warning(title: string, message: string, config?: C): void;

  /**
   * Show error toast
   * @param title Key to title of the toast
   * @param message Key to detailed message text
   * @param config Optional config
   */
  error(title: string, message: string, config?: C): void;

  /**
   * Open success toast smarted way, build title and message based on key and config token
   * @param key Prefix to keys of title and message
   * @param config Optional config
   */
  smartSuccess(key: string, config?: C): void;

  /**
   * Open warning toast smarted way, build title and message based on key and config token
   * @param key Prefix to keys of title and message
   * @param config Optional config
   */
  smartWarning(key: string, config?: C): void;

  /**
   * Open error toast smarted way, build title and message based on key and config token
   * @param key Prefix to keys of title and message
   * @param config Optional config
   */
  smartError(key: string, config?: C): void;

  /**
   * Open success or error toast based on result param, build title and message based on key and config token
   * @param key Prefix to keys of title and message
   * @param result result of operation, based on this param smartSuccess or smartError is called
   * @param config Optional config
   */
  smartResult(key: string, result: boolean, config?: C): void;
}

export interface WithContext<T> {
  /**
   * Contextualize the whole service
   * @param context prefix which musy be apply to all keys in service
   */
  withContext(context: string): T;
}

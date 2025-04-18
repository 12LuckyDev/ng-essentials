export abstract class Contexted {
  private _translateContext: string;

  constructor(context: string) {
    this._translateContext = context.endsWith('.') ? context : `${context}.`;
  }

  /**
   * Add context (prefix) to given key
   * @param key value to contextualize
   * @returns contextualized key
   */
  protected contextualize(key: string): string {
    return `${this._translateContext}${key}`;
  }
}

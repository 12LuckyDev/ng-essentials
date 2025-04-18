export abstract class Contexted {
	private _translateContext: string;

	constructor(context: string) {
		this._translateContext = context.endsWith('.') ? context : `${context}.`;
	}

	protected contextualize(key: string): string {
		return `${this._translateContext}${key}`;
	}
}

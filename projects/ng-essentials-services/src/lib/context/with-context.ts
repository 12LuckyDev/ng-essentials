export interface WithContext<T> {
	withContext(context: string): T;
}

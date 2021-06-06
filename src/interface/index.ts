export interface LoadableEntity<T> {
  data: null | Array<T>,
  isLoading: boolean,
  error: Error | null
}
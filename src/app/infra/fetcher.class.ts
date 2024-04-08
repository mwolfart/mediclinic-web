import { Observable } from "rxjs";

export class Fetcher<T> {
  data: T | undefined;
  isLoading = false;
  error: string | null = null;
  private action$: Observable<T> | undefined;

  load(action$: Observable<T>) {
    this.isLoading = true;
    this.error = null;
    this.action$ = action$;
    this.action$.subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        this.error = error;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}

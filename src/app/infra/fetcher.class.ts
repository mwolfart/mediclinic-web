import { Observable } from "rxjs";

type FetcherOptions = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

export class Fetcher<T> {
  data: T | undefined;
  isLoading = false;
  error: string | null = null;
  private action$: Observable<T> | undefined;

  load(action$: Observable<T>, options?: FetcherOptions) {
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
        options?.onError && options.onError(error);
      },
      complete: () => {
        this.isLoading = false;
        options?.onSuccess && options.onSuccess();
      },
    });
  }
}

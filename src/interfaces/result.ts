export interface Loading<T> {
  status: "loading";
  item?: T;
}
export interface Success<T> {
  status: "success";
  item: T;
}
export interface Error<T> {
  status: "error";
  item?: T;
  error?: any;
}

export interface NotFound<T> {
  status: "not-found";
  item?: T;
}

type Result<T> = Loading<T> | Success<T> | Error<T> | NotFound<T>;

export type Refreshable<T> = Result<T> & {
  refresh: () => Promise<void>;
};

export type Paginable<T> = Result<T> & {
  more: (increment: number) => void;
};

export type Dataset<T> = Paginable<T> & Refreshable<T>;

export default Result;

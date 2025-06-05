export type myTuple = readonly [string, string, number, boolean];

export type typeData = string | number | boolean | any[] | myTuple | ReadonlyArray<any>;

export type SubmitHandler = (event: Event) => void;

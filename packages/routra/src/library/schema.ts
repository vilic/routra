type Alphabet =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z';

export type RouteKey = `${Alphabet | Uppercase<Alphabet>}${string}`;

export type SchemaRecord = {
  [TKey in RouteKey]: Schema | true;
};

export type Schema = {
  $state?: object;
  $exact?: boolean;
} & SchemaRecord;

export type SchemaRecord__ = {
  [TKey in string]: Schema__ | true;
};

export type Schema__ = {
  $state?: object;
  $exact?: boolean;
} & SchemaRecord__;

export interface SchemaStatePart<TState extends object> {
  $state: TState;
}

export type StateType<TSchema> = TSchema extends SchemaStatePart<infer TState>
  ? TState
  : object;

export function schemas<T extends SchemaRecord>(schemas: T): T {
  return schemas;
}

export function schema<T extends Schema>(schema: T): T {
  return schema;
}

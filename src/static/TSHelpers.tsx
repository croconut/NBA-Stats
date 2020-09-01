export default class {
  static get<T, P extends keyof NonNullable<T>>(
    obj: T | undefined,
    prop: P
  ): NonNullable<T>[P] | undefined {
    if (obj) {
      return (obj as NonNullable<T>)[prop];
    } else {
      return undefined;
    }
  }
}

export class ObjectUtils {
    static clone<T>(obj: T) : T {
        return JSON.parse(JSON.stringify(obj));
    }

    static same<T>(a: T, b: T) : boolean {
        return JSON.stringify(a) === JSON.stringify(b);
    }
}

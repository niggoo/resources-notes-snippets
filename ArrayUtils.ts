export class ArrayUtils {
    static flatMap(f: (e) => {}, xs) {
        return xs.reduce((acc, x) => acc.concat(f(x)), []);
    }
}

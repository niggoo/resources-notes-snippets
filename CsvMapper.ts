export class CsvMapper {
    static write<T>(schema: Array<string>, array: Array<T>, ...mappingFuncs: Array<(a:T) => any>): string {
        if (schema.length != mappingFuncs.length) throw new Error("Schema and mappingfunc parameters do not match!");
        return [schema.join(';')].concat(
            array.map(element =>
                mappingFuncs.map(func => {
                    let result = func(element);
                    return (result) ? result : '';
                }).join(';')
            )
        ).join('\n')
    }
}

export class CsvMapper {
    static write<T>(schema: {[key: string]: (o:T) => any}, array: Array<T>): string {
        return [Object.keys(schema).join(';')].concat(
            array.map(element =>
                Object.values(schema).map(func => {
                    let result = func(element);
                    return (result) ? result : '';
                }).join(';')
            )
        ).join('\n')
    }
}

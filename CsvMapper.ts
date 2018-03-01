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


/*
Example usage:
return CsvMapper.write<TaskDTO>({
            "Id": t => t.id,
            "Name": t => t.name,
            "Description": t => t.description,
            "Parent Task ID": t => t.parentTaskId,
            "Priority": t => t.priority ? t.priority.name : null,
            "Status": t => t.status ? t.status.name : null,
            "Assigned to": t => t.assignedTo
        }, tasks);
*/

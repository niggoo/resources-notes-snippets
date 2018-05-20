export class EnumUtils {
    static values<E>(enumeration: E): string[] {
        return Object.keys(enumeration).filter(key => !isNaN(Number(enumeration[key])));
    }

    static contains<E>(enumArray: Array<any>, enumNeedle: number, enumeration: E): boolean {
        return enumArray.some((t) => t == enumeration[enumNeedle]);
    }
}

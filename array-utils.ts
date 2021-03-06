export class ArrayUtils {
  static flatMap<I, R>(f: (e: I) => Array<R>, xs: Array<I>): Array<R> {
    return xs.reduce((acc, x) => acc.concat(f(x)), []);
  }

  static groupBy<V>(list: Array<any>, groupingKey: string): Map<string, Array<V>> {
    const listMapGroupedByKey = new Map<string, Array<V>>();
    const splittedGroupingKey = groupingKey.split('.');

    list.forEach(element => {
      let groupingProperty = element;
      splittedGroupingKey.forEach(partialGroupingKey => {
        groupingProperty = groupingProperty[partialGroupingKey];
      });
      if (!groupingProperty) {
        groupingProperty = null;
      }
      if (listMapGroupedByKey.has(groupingProperty)) {
        listMapGroupedByKey.get(groupingProperty).push(element);
      } else {
        listMapGroupedByKey.set(groupingProperty, new Array<any>(element));
      }
    });
    return listMapGroupedByKey;
  }

  static groupByObject<K, V>(list: Array<any>, groupingKey: string, fallback?: K): Map<K, Array<V>> {
    const listMapGroupedByKey = new Map<K, Array<V>>();
    const splittedGroupingKey = groupingKey.split('.');

    list.forEach(element => {
      let groupingProperty = element;
      splittedGroupingKey.forEach(partialGroupingKey => {
        groupingProperty = groupingProperty[partialGroupingKey];
      });
      if (!groupingProperty) {
        groupingProperty = fallback;
      }
      const alreadyExistingKey = Array.from(listMapGroupedByKey.keys())
        .find(r => JSON.stringify(r) === JSON.stringify(groupingProperty));
      if (alreadyExistingKey !== undefined) {
        listMapGroupedByKey.get(alreadyExistingKey).push(element);
      } else {
        listMapGroupedByKey.set(groupingProperty, new Array<any>(element));
      }
    });
    return listMapGroupedByKey;
  }
}

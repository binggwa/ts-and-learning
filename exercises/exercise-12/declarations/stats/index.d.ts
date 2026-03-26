declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;
    
    type getIndex = <T>(input: T[], comparator: Comparator<T>) => number;

    export const getMaxIndex: getIndex;
    export const getMinIndex: getIndex;
    export const getMedianIndex: getIndex;

    type getElement = <T>(input: T[], comparator: Comparator<T>) => null | T;
    export const getMaxElement: getElement;
    export const getMinElement: getElement;
    export const getMedianElement: getElement;
    
    export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => null | number;
}

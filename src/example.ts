function concat(prefix: string, suffix: string): string {
    return  prefix + suffix;
}

concat('Hello ', 'World') // -> Hello World;

type Data = {
    howIDoIt: string,
    simeArray: [string, number],
}

interface Hometask {
    howIDoIt: string,
    simeArray: [string, string, number],
    withData: Array<Data>,
}

const myHometask: Hometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (accumulator: U, currentValue: T, index: number, array: MyArray<T>) => U, initialValue: U): U;
}
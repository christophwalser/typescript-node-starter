export function add(a: number, b:number): number {
    return a + b;
}

export function main(): number {
    console.log(`hello world ${add(2, 2)}`);
    return 1;
}

main();
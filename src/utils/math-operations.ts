const addition = (n1: string, n2: string) => String(+n1 + +n2)
const subtract = (n1: string, n2: string) => ''

export const math = (n1: string, operation: string, n2?: string) => {
    let result = '';

    console.log(operation)

    if(operation === '+' && n2) result = addition(n1, n2)
    if(operation === '-' && n2) result = subtract(n1, n2)

    return result
}
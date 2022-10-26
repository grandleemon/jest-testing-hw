const addition = (n1: string, n2: string) => ''

export const math = (n1: string, operation: string, n2?: string) => {
    let result = '';

    if(operation === '+' && n2) result = addition(n1, n2)

    return result
}
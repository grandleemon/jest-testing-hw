import {math} from './math-operations'
import {expect} from "vitest";

test('addition', () => {
    expect(math("1",'+', "2"), 'sum').toBe("3")
})

test('subtract', () => {
    expect(math('3', '-', '1'), '').toBe("2")
})

test('divide', () => {
    expect(math('3', '/', '1'), '').toBe("3")
})

test('power', () => {
    expect(math('3', '**', '2'), '').toBe("9")
})

test('sqrt', () => {
    expect(math('9', 'sqrt'), '').toBe("3")
})

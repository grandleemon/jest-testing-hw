import {math} from './math-operations'
import {expect} from "vitest";

test('addition', () => {
    expect(math("1",'+', "2"), 'sum').toBe("3")
})

test('subtract', () => {
    expect(math('3', '-', '1'), '').toBe("2")
})
import {math} from './math-operations'
import {expect} from "vitest";

test('', () => {
    expect(math("1",'+', "2"), 'sum').toBe("3")
})
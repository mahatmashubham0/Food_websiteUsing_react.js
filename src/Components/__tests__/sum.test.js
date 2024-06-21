import { sum } from "../sum"


test("check two js code", () => {
    expect(sum(2,5)).toBe(7)
})


/**
 * this purely java script file that can not understand the module statement we have to convert to module file for that we have to use 
 * the babel configuration 
 */
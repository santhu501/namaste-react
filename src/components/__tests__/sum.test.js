import sum from "../sum";

test("Testing sum method", ()=>{

    let sumVal = sum(2, 4);
    expect(sumVal).toBe(6);

});
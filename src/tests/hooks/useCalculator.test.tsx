import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

test("show addition example", () => {
    const { result } = renderHook(() => useCalculator());
    const { addition } = result.current;
    
    expect(addition(Number(1).toString(), Number(3).toString())).toBe(Number(4).toString());
});

test("show substraction example", () => {
    const { result } = renderHook(() => useCalculator());
    const { substraction } = result.current;

    expect(substraction(Number(4).toString(), Number(1).toString())).toEqual(Number(3).toString());
});

test("show division example", () => {
    const { result } = renderHook(() => useCalculator());
    const { division } = result.current;
    
    expect(division(Number(6).toString(), Number(2).toString())).toEqual(Number(3).toString());
});

test("show modulo example", () => {
    const { result } = renderHook(() => useCalculator());
    const { modulo } = result.current;
   
    expect(modulo(Number(5).toString(), Number(3).toString())).toEqual(Number(2).toString());
});

test("show square example", () => {
    const { result } = renderHook(() => useCalculator());
    const { square } = result.current;
    
    expect(square(Number(9).toString())).toEqual(Number(3).toString());
});
import React from "react";

export const getSsrImplementation = <T extends (...args: any[]) => any>(
  fn: T,
): ((...args: Parameters<T>) => ReturnType<T>) => {
  return (...args: Parameters<T>): ReturnType<T> => {
    const useEffectMock = jest.spyOn(React, "useEffect").mockImplementation(
      jest.fn(() => {
        console.log('useEffect mock of "Next Testing Library" was invoked');
      }),
    );
    const useLayoutEffectMock = jest
      .spyOn(React, "useLayoutEffect")
      .mockImplementation(
        jest.fn(() => {
          console.log(
            'useLayoutEffect mock of "Next Testing Library" was invoked',
          );
        }),
      );

    const result: ReturnType<T> = fn(...args);

    useEffectMock.mockRestore();
    useLayoutEffectMock.mockRestore();

    return result;
  };
};

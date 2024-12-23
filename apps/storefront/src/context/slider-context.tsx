"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

type SliderContext = {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  resetSliderValue: () => void;
};
const SliderContext = React.createContext<SliderContext>({
  value: 0,
  setValue: () => {},
  resetSliderValue: () => {},
});

export function useSlider() {
  const context = React.useContext(SliderContext);
  if (!context) {
    throw new Error("useSlider must be used within a SliderContextProvider.");
  }

  return context;
}

type Props = {
  children: React.ReactNode;
  initialValue: number;
  paramName: string;
};

export function SliderContextProvider({
  children,
  initialValue,
  paramName,
}: Props) {
  const searchParams = useSearchParams();
  const priceSearchParamValue = React.useMemo(
    () => parseInt(searchParams.get(paramName) ?? initialValue.toString()),
    [initialValue, paramName, searchParams]
  );

  const [value, setValue] = React.useState(priceSearchParamValue);

  React.useEffect(() => {
    setValue(priceSearchParamValue);
  }, [priceSearchParamValue]);

  const resetSliderValue = React.useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  const providerValue = React.useMemo(
    () => ({ value, setValue, resetSliderValue }),
    [resetSliderValue, value]
  );

  return (
    <SliderContext.Provider value={providerValue}>
      {children}
    </SliderContext.Provider>
  );
}

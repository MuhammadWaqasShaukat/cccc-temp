import React, { createContext, useState, ReactNode, useRef } from "react";

interface CottonCandyContextType {
  price: number;
  count: number;
  setCount: (count: number) => void;
  priceChangeTimeStamp: string;
  mintSectionRef: any;
}

const defaultContextValue: CottonCandyContextType = {
  price: 0.0012,
  count: 0,
  setCount: (count: number) => {},
  priceChangeTimeStamp: new Date().toISOString(),
  mintSectionRef: null,
};

export const CottonCandyContext =
  createContext<CottonCandyContextType>(defaultContextValue);

interface CottonCandyContextProviderProps {
  children: ReactNode;
}

export const CottonCandyContextProvider: React.FC<
  CottonCandyContextProviderProps
> = ({ children }) => {
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0.0012);
  const [priceChangeTimeStamp, setPriceChangeTimeStamp] = useState<string>("");
  const mintSectionRef = useRef<HTMLDivElement | null>(null);
  const value: CottonCandyContextType = {
    price,
    count,
    setCount,
    priceChangeTimeStamp,
    mintSectionRef,
  };

  return (
    <CottonCandyContext.Provider value={value}>
      {children}
    </CottonCandyContext.Provider>
  );
};

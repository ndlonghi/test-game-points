import { act } from "react";
import { renderHook } from "@testing-library/react";

import { PlayerItemsProvider, usePlayerItems } from "./PlayerItemsContext";

const mockItems = [
  {
    name: "A",
    points: 50,
    bonus: {
      amount: 3,
      points: 200,
    },
  },
  {
    name: "B",
    points: 30,
    bonus: {
      amount: 2,
      points: 90,
    },
  },
  {
    name: "C",
    points: 20,
  },
  {
    name: "D",
    points: 15,
  },
  {
    name: "E",
    points: 0,
  },
];

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <PlayerItemsProvider>{children}</PlayerItemsProvider>
);

describe("PlayerItemsContext and usePlayerItems", () => {
  it("should return default value", () => {
    const { result } = renderHook(() => usePlayerItems(), { wrapper });
    
    expect(result.current.items).toEqual({});
    expect(result.current.bonusPoints).toEqual(0);
    expect(result.current.totalPoints).toEqual(0);
  });

  it("should return correct points with no bonus", () => {
    const { result } = renderHook(() => usePlayerItems(), { wrapper });
    
    act(() => {
      result.current.addItem(mockItems[0]);
      result.current.addItem(mockItems[1]);
      result.current.addItem(mockItems[2]);
      result.current.addItem(mockItems[3]);
    });
    
    expect(Object.keys(result.current.items).length).toEqual(4);
    expect(result.current.bonusPoints).toEqual(0);
    expect(result.current.totalPoints).toEqual(115);
  });

  it("should return correct points with bonus", () => {
    const { result } = renderHook(() => usePlayerItems(), { wrapper });
    
    act(() => {
      result.current.addItem(mockItems[1]);
      result.current.addItem(mockItems[0]);
      result.current.addItem(mockItems[1]);
    });
    
    expect(Object.keys(result.current.items).length).toEqual(2);
    expect(result.current.items["B"].amount).toEqual(2);
    expect(result.current.bonusPoints).toEqual(30);
    expect(result.current.totalPoints).toEqual(140);
  });
})
  
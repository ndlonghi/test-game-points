import { mockItems } from "src/__mocks__/itemMocks";
import { getPlayerItemPoints } from "./getPlayerItemPoints";

describe('getPlayerItemPoints', () => {
  it('should return points with no bonus', () => {
    const points = getPlayerItemPoints(mockItems[2], 3)
    
    expect(points).toEqual(60);
  });

  it('should return points with bonus', () => {
    const points = getPlayerItemPoints(mockItems[0], 3)
    
    expect(points).toEqual(200);
  });
});

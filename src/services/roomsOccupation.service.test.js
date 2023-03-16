import roomOccupationsService from './roomsOccupation.service';
import guests from '../data/guests.json';

describe('Calculate room occupations', () => {
  test('3 economy and 3 premium', () => {
    const result = roomOccupationsService.getRoomOccupations(
      { guests, freeEconomyRooms: 3, freePremiumRooms: 3 }
    );
    expect(result).toEqual({
      usageEconomy: {
        rooms: 3,
        price: 167,
      },
      usagePremium: {
        rooms: 3,
        price: 738,
      }
    });
  });

  test('5 economy and 7 premium', () => {
    const result = roomOccupationsService.getRoomOccupations(
      { guests, freeEconomyRooms: 5, freePremiumRooms: 7 }
    );
    expect(result).toEqual({
      usageEconomy: {
        rooms: 4,
        price: 189,
      },
      usagePremium: {
        rooms: 6,
        price: 1054,
      }
    });
  });

  test('1 economy and 7 premium', () => {
    const result = roomOccupationsService.getRoomOccupations(
      { guests, freeEconomyRooms: 1, freePremiumRooms: 7 }
    );
    expect(result).toEqual({
      usageEconomy: {
        rooms: 1,
        price: 45,
      },
      usagePremium: {
        rooms: 7,
        price: 1153,
      }
    });
  });
});

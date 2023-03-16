import guests from '../data/guests.json';

class RoomOccupationsService {
  #getParsedUsage(freeRooms, guestsForRooms) {
    const guests = guestsForRooms.slice(0, freeRooms);
    return {
      rooms: guests.length,
      price: guests.reduce((prev, current) => prev + current, 0),
    }
  }

  #getGuestsForRoomTypes(guests) {
    const guestsForEconomy = [];
    const guestsForPremium = [];

    guests.forEach(guestPrice => {
      if (guestPrice >= 100) {
        guestsForPremium.push(guestPrice);
      } else {
        guestsForEconomy.push(guestPrice);
      }
    });
    guestsForEconomy.sort((a, b) => b - a);
    guestsForPremium.sort((a, b) => b - a);

    return [guestsForEconomy, guestsForPremium];
  }

  #getOrganizedGuests({ freePremiumRooms, guestsForPremium, freeEconomyRooms, guestsForEconomy }) {
    const organizedPremiumGuests = [...guestsForPremium];
    const organizedEconomyGuests = [...guestsForEconomy];
    const availableRoomsInPremium = freePremiumRooms - organizedPremiumGuests.length;
    const extraRoomsInEconomy = organizedEconomyGuests.length - freeEconomyRooms;
    if (availableRoomsInPremium > 0 && extraRoomsInEconomy > 0) {
      const guestsToMovePremium = Math.min(extraRoomsInEconomy, availableRoomsInPremium);
      organizedPremiumGuests.push(...organizedEconomyGuests.splice(0, guestsToMovePremium));
    }

    return [organizedEconomyGuests, organizedPremiumGuests];
  }

  getRoomOccupations({ freeEconomyRooms, freePremiumRooms }) {
    const [guestsForEconomy, guestsForPremium] = this.#getGuestsForRoomTypes(guests);
    const [organizedEconomyGuests, organizedPremiumGuests] = this.#getOrganizedGuests({
      freePremiumRooms, guestsForPremium, freeEconomyRooms, guestsForEconomy,
    });
    const usageEconomy = this.#getParsedUsage(freeEconomyRooms, organizedEconomyGuests);
    const usagePremium = this.#getParsedUsage(freePremiumRooms, organizedPremiumGuests);
  
    return { usageEconomy, usagePremium };
  }
}

const roomOccupationsService = new RoomOccupationsService();

export default roomOccupationsService;

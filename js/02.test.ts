import {CityType} from "./types";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New Town',
        hauses: [
            {buildedAt: 2012, repaired: false, address: {number: 100, street: {title: 'White street'}}},
            {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {buildedAt: 2020, repaired: false, address: {number: 101, street: {title: 'Happy street'}}},
        ],
        govermentBuilders: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {title: 'Central Str'}
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            },
        ],
        citizensNumber: 600000
    }
})

test("test city should contains 3 houses", () => {
    expect(city.hauses.length).toBe(3);

    expect(city.hauses[0].buildedAt).toBe(2012);
    expect(city.hauses[0].repaired).toBe(false);
    expect(city.hauses[0].address.number).toBe(100);
    expect(city.hauses[0].address.street.title).toBe("White street");

    expect(city.hauses[1].buildedAt).toBe(2008);
    expect(city.hauses[1].repaired).toBe(false);
    expect(city.hauses[1].address.number).toBe(100);
    expect(city.hauses[1].address.street.title).toBe("Happy street");

    expect(city.hauses[2].buildedAt).toBe(2020);
    expect(city.hauses[2].repaired).toBe(false);
    expect(city.hauses[2].address.number).toBe(101);
    expect(city.hauses[2].address.street.title).toBe("Happy street");
})

// 01. дополните тип GovernmentBuildingType
// 02. заполните объект city, чтобы тесты ниже прошли
test("test city should contains hospital and fire station", () => {
    expect(city.govermentBuilders.length).toBe(2);

    expect(city.govermentBuilders[0].type).toBe("HOSPITAL");
    expect(city.govermentBuilders[0].budget).toBe(200000);
    expect(city.govermentBuilders[0].staffCount).toBe(200);
    expect(city.govermentBuilders[0].address.street.title).toBe("Central Str");

    expect(city.govermentBuilders[1].type).toBe("FIRE-STATION");
    expect(city.govermentBuilders[1].budget).toBe(500000);
    expect(city.govermentBuilders[1].staffCount).toBe(1000);
    expect(city.govermentBuilders[1].address.street.title).toBe("South Str");
})

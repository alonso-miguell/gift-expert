import {fetchGifs} from "../../helpers/api";

describe('api Suite test', () => {

        test('api props',async () => {
            const response= await fetchGifs('Odette');
            expect(response.length).toBeGreaterThan(0);
            expect(response[0]).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            });

        });
    }
);

import {renderHook, waitFor} from "@testing-library/react";
import {useFetchGifs} from "../../hooks/useFetchGifts";
import {act} from "react";

describe('fetchGiftsTest suite', () => {
    test('Initial state test', () => {

        const {result} =
            renderHook(() => useFetchGifs('Test category'));

        const { gifts, isLoading } = result.current;

        expect(gifts).toHaveLength(0);
        expect(isLoading).toBe(true);
        // expect(isLoading).toBeTruthy();
    });

    test('Change hook state test', async () => {

        const {result} =
            renderHook(() => useFetchGifs('Test category'));

        //this actually triggers the hook and uses fetchGifs to get API results
        await waitFor(
            () => expect(result.current.gifts.length).toBeGreaterThan(0)
        );

        const { gifts, isLoading } = result.current;

        expect(gifts.length).toBeGreaterThan(1);
        expect(isLoading).toBe(false);
    });

});
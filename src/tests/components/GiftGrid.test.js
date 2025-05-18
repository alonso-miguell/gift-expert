import {render, screen} from "@testing-library/react";
import {GiftGrid} from "../../components/GiftGrid";
import {useFetchGifs} from "../../hooks/useFetchGifts";

jest.mock("../../hooks/useFetchGifts");

describe('Gift Grid Suite Test', () => {

    test('Render component', () => {
        useFetchGifs.mockReturnValue({
                gifts: [],
                isLoading: true,
            }
        );

        render(<GiftGrid category={"random"}/>)
        expect(screen.getByText("random"));
        expect(screen.getByText("LOADING...."));
    });

    test('useFetch mock', () => {
        useFetchGifs.mockReturnValue({
                gifts: [
                    {
                        id: 1,
                        url: "https://localhost:8000/Maelle.jpg",
                        title: "Maelle",
                    },
                    {
                        id: 2,
                        url: "https://localhost:8000/Gustave.jpg",
                        title: "Gustave",
                    }
                ],
                isLoading: false,
            }
        );

        render(<GiftGrid category={"Expedition 33"}/>)
        screen.debug();
        expect(screen.getByText("Expedition 33"));
        expect(screen.queryByText("LOADING....")).not.toBeInTheDocument();
        expect(screen.getAllByRole("img").length).toBe(2);

    });


})
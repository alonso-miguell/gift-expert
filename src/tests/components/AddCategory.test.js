import {fireEvent, render, screen} from '@testing-library/react';
import {GiftExpertApp} from '../../GiftExpertApp';
import {GiftItem} from "../../components/GiftItem";
import {GifSearchBar, handleOnSubmit} from "../../components/GifSearchBar";

describe('Gift Item Suite test', () => {

        test('Add Category test', () => {
            render(<GifSearchBar />);
            const inputElement = screen.getByRole('textbox');
            fireEvent.input(inputElement, {target: {value: "Odin"}});

            screen.debug();

            expect(inputElement.value).toBe('Odin');
        });

        test('Submit test', () => {
            const onNewCategoryFn = jest.fn();
            render(<GifSearchBar onNewCategory={onNewCategoryFn} />);

            const inputValue="Maelle";
            const inputElement = screen.getByRole('textbox');
            const form=screen.getByTestId("category-form");

            fireEvent.input(inputElement, {target: {value: inputValue}});
            fireEvent.submit(form);

            expect(inputElement.value).toBe('');
            expect(onNewCategoryFn).toHaveBeenCalled();
            expect(onNewCategoryFn).toHaveBeenCalledTimes(1);
            expect(onNewCategoryFn).toHaveBeenCalledWith(inputValue);
        });

        test('Submit test with empty input', () => {
            const onNewCategoryFn = jest.fn();
            render(<GifSearchBar onNewCategory={onNewCategoryFn} />);

            const inputValue="M";
            const inputElement = screen.getByRole('textbox');
            const form=screen.getByTestId("category-form");

            fireEvent.input(inputElement, {target: {value: inputValue}});
            fireEvent.submit(form);

            expect(inputElement.value).toBe('M');
            expect(onNewCategoryFn).not.toHaveBeenCalled();
            expect(onNewCategoryFn).toHaveBeenCalledTimes(0);
        });


    }
);

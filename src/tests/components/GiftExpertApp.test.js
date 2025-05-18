import {render, screen} from '@testing-library/react';
import {GiftExpertApp} from '../../GiftExpertApp';

describe('Gift Expert Suite Test', () => {

    test('renders learn react link', () => {
        render(<GiftExpertApp/>);
        const linkElement = screen.getByText("GiftExpertApp");
        expect(linkElement).toBeInTheDocument();
    });

});

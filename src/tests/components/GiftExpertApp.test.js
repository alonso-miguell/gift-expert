import {render, screen} from '@testing-library/react';
import {GiftExpertApp} from '../../GiftExpertApp';

describe('Gift Expert Suite Test', () => {

    test('renders main component', () => {
        render(<GiftExpertApp/>);
        const component = screen.getByText("GiftExpertApp");
        expect(component).toBeInTheDocument();
    });

    test('test Initial State', () => {
        render(<GiftExpertApp/>);

        expect(screen.getByText('Final Fantasy')).toBeInTheDocument();
        expect(screen.getByText('Dragon quest')).toBeInTheDocument();
    });

    test('test add a new category', () => {
        const component=render(<GiftExpertApp/>);

        expect(screen.getByText('Final Fantasy')).toBeInTheDocument();
        expect(screen.getByText('Dragon quest')).toBeInTheDocument();
    });

});

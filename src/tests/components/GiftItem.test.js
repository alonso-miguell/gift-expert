import {render, screen} from '@testing-library/react';
import {GiftExpertApp} from '../../GiftExpertApp';
import {GiftItem} from "../../components/GiftItem";

const titleTest = 'FF'
const urlTest = 'https://www.square-enix.com/';
describe('Gift Item Suite test', () => {

        test('GitItemTest', () => {
            const container = render(<GiftItem title={titleTest} url={urlTest}/>);
            expect(container).toMatchSnapshot();
        });

        test('GiftItem props', () => {
            render(<GiftItem title={titleTest} url={urlTest}/>);
            // console.log(screen.getByRole('img'));

            // expect(screen.getByRole('img').src).toBe(urlTest); //other way to do it

            const {src, alt} = screen.getByRole('img');
            expect(src).toBe(urlTest);
            expect(alt).toBe(titleTest);
        });
    }
);

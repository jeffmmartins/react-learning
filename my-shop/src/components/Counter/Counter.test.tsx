import { render } from '@testing-library/react';
import Counter from './Counter';


test('it should render Counter component correctly', () => {
    //Solicitando dentro do teste para que ele redenrize o componente counter.
    render(<Counter/>)
})
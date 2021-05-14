import React from 'react';
import { render , screen } from '@testing-library/react';

import CharactersPanel from './charactersPanel';
import fetchCharacters from '../utils/fetchCharacters';


describe('when the page is showed', () => {
    beforeEach(() => {
        render(<CharactersPanel />)
    });

    it('should exists title Rick and Morty', () => {
        expect(screen.getByText(/rick and morty/i)).toBeInTheDocument();
    } )
     
})
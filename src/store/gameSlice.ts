import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tile, generateEmptyGrid, placeMines, calculateAdjacentMines } from '../helpers/helpers';

interface GameState {
    difficulty: 'Easy' | 'Casual' | 'Standard' | 'Hard';
    grid: Tile[][];
}

// Initial game state
const initialState: GameState = {
    difficulty: 'Easy',
    grid: [],
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setDifficulty: (state, action: PayloadAction<'Easy' | 'Casual' | 'Standard' | 'Hard'>) => {
            state.difficulty = action.payload;

            let gridRows: number, gridCols: number, numMines: number; // variables dynamic.

            switch (state.difficulty) {
                case 'Easy':
                    gridRows = 8;
                    gridCols = 8;
                    numMines = 10
                    break;
                case 'Casual':
                    gridRows = 16;
                    gridCols = 16;
                    numMines = 40;
                    break;
                case 'Standard':
                    gridRows = 24;
                    gridCols = 24;
                    numMines = 99;
                    break;
                case 'Hard':
                    gridRows = 30;
                    gridCols = 30;
                    numMines = 200;
                    break;
            };

            // Grid generation from helper functions:
            let grid = generateEmptyGrid(gridRows, gridCols);
            grid = placeMines(grid, numMines);
            grid = calculateAdjacentMines(grid);

            state.grid = grid;
        },

        // other reducers

    },
});

export const { setDifficulty } = gameSlice.actions;

export default gameSlice.reducer;

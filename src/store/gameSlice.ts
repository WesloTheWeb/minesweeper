import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tile, generateEmptyGrid, placeMines, calculateAdjacentMines } from '../helpers/helpers';

interface GameState {
    difficulty: 'Easy' | 'Casual' | 'Standard' | 'Hard' | null;
    grid: Tile[][];
}

// Initial game state
const initialState: GameState = {
    difficulty: null,
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

        revealTile: (state, action: PayloadAction<{ rowIndex: number; colIndex: number }>) => {
            const { rowIndex, colIndex } = action.payload;
            state.grid[rowIndex][colIndex].isRevealed = true;
        },

        flagTile: (state, action: PayloadAction<{ rowIndex: number; colIndex: number }>) => {
            const { rowIndex, colIndex } = action.payload;
            state.grid[rowIndex][colIndex].isFlagged = !state.grid[rowIndex][colIndex].isFlagged; // toggle flag
        },
    },
});

export const { setDifficulty, revealTile, flagTile } = gameSlice.actions;
export default gameSlice.reducer;

/* TODO: add additional logic to handle game rules, such as ending the game if a mine is revealed, or 
revealing all surrounding tiles when a tile with no adjacent mines is clicked.*/
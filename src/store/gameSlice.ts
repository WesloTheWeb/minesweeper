import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
    difficulty: 'Easy' | 'Casual' | 'Standard' | 'Hard';
    grid: number[][];
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
            // TODO: Update the `grid` based on the new difficulty
        },
        // Other reducers...
    },
});

export const { setDifficulty } = gameSlice.actions;

export default gameSlice.reducer;

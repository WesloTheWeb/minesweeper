// some helper functions to generate the game board grid.

export interface Tile {
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    adjacentMines: number;
};

// Generate empty grid
export const generateEmptyGrid = (rows: number, cols: number): Tile[][] => {
    return Array(rows)
        .fill(null)
        .map(() =>
            Array(cols)
                .fill(null)
                .map(() => ({
                    isMine: false,
                    isRevealed: false,
                    isFlagged: false,
                    adjacentMines: 0,
                })),
        );
};

// Placement of line logic
export const placeMines = (grid: Tile[][], numMines: number): Tile[][] => {
    let minePositions: { row: number, col: number }[] = [];

    while (minePositions.length < numMines) {
        let randomRow = Math.floor(Math.random() * grid.length);
        let randomCol = Math.floor(Math.random() * grid[0].length);

        if (!grid[randomRow][randomCol].isMine) {
            grid[randomRow][randomCol].isMine = true;
            minePositions.push({ row: randomRow, col: randomCol });
        };
    };

    return grid;
};

// calculate adjacent mines
export const calculateAdjacentMines = (grid: Tile[][]): Tile[][] => {
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!grid[i][j].isMine) {
                let mines = 0;

                // Check all 8 neighboring tiles
                for (let di = -1; di <= 1; di++) {
                    for (let dj = -1; dj <= 1; dj++) {
                        if (
                            i + di >= 0 && i + di < rows &&
                            j + dj >= 0 && j + dj < cols &&
                            grid[i + di][j + dj].isMine
                        ) {
                            mines++;
                        }
                    }
                }

                grid[i][j].adjacentMines = mines;
            };
        };
    };

    return grid;
};
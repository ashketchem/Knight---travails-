function knightMoves(start, end) {
    // Possible moves for a knight
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // Initialize the queue for BFS
    const queue = [[start, [start]]]; // [current_position, path]
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const [currentPosition, path] = queue.shift();

        // Check if we reached the end position
        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            return path;
        }

        // Explore all possible knight moves
        for (const move of moves) {
            const nextPosition = [currentPosition[0] + move[0], currentPosition[1] + move[1]];

            // Check if the next position is within the bounds of the board
            if (nextPosition[0] >= 0 && nextPosition[0] < 8 && nextPosition[1] >= 0 && nextPosition[1] < 8) {
                if (!visited.has(nextPosition.toString())) {
                    visited.add(nextPosition.toString());
                    queue.push([nextPosition, path.concat([nextPosition])]);
                }
            }
        }
    }
}

// Example usage
console.log(knightMoves([0, 0], [1, 2]));  // Shortest path from (0,0) to (1,2)
console.log(knightMoves([0, 0], [3, 3]));  // Shortest path from (0,0) to (3,3)
console.log(knightMoves([3, 3], [0, 0]));  // Shortest path from (3,3) to (0,0)
console.log(knightMoves([0, 0], [7, 7]));  // Shortest path from (0,0) to (7,7)

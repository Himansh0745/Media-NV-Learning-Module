/**
 * Enum (enumeration) — a TypeScript data type for a set of named constants.
 * Use enums to give friendly names to related values (numeric or string).
 *
 * - String enums give each member a readable string (good for debugging or persisted values).
 * - Numeric enums auto-assign incremental numbers (0, 1, 2 ...).
 *
 * Below are examples and usage patterns with inline comments.
 */

// ----- String enum example -----
// Each member is assigned a explicit string value.
enum SeatChoice {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window",
    FOURTH = "fourth"
}

// Create a type for passengers that uses the enum for the seat field
type Passenger = {
    name: string;
    seat: SeatChoice;
};

// Create an object using the enum value
const alice: Passenger = { name: "Alice", seat: SeatChoice.WINDOW };
console.log("Alice's seat:", alice.seat); // outputs: Alice's seat: window

// Function that accepts a Passenger and uses the enum value
function assignSeat(passenger: Passenger) {
    // enum values are just values, use them directly
    console.log(`${passenger.name} assigned to ${passenger.seat}`);
}
assignSeat(alice);

// Helper that checks enum values
function isWindow(seat: SeatChoice): boolean {
    return seat === SeatChoice.WINDOW;
}
console.log("Is Alice in window seat?", isWindow(alice.seat));

// Switch statement that branches on enum values
function seatMessage(seat: SeatChoice) {
    switch (seat) {
        case SeatChoice.AISLE:
            console.log("You prefer aisle seat — great for quick exits.");
            break;
        case SeatChoice.MIDDLE:
            console.log("Middle seat — stretch your patience.");
            break;
        case SeatChoice.WINDOW:
            console.log("Window seat — enjoy the view!");
            break;
        case SeatChoice.FOURTH:
            console.log("Fourth seat — special case example.");
            break;
    }
}
seatMessage(alice.seat);

// ----- Numeric enum example (for comparison) -----
// Members are auto-numbered starting at 0 unless specified.
enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}
console.log("Directions numeric enums:", Direction.Up, Direction.Left);

export {}
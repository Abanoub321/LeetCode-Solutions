const minimumCardPickup = (cards: number[]): number => {
    let map: { [key: number]: number } = {};
    let minValue = Number.MAX_SAFE_INTEGER;
    cards.forEach((card: number, index: number) => {
        if (map[card] !== undefined) {
            if (index - map[card] < minValue) {
                minValue = index - map[card];
            }
            map[card] = index;
        }
        else map[card] = index;
    })
    return minValue === Number.MAX_SAFE_INTEGER ? -1 : minValue + 1;
};


export default minimumCardPickup;
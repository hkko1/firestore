"use strict";
class Reptile {
    constructor() {
        this.reptiles = [
            "Alligator",
            "Crocodile",
            "Chameleon",
            "Komodo Dragon",
            "Iguana",
            "Salamander",
            "Snake",
            "Lizard",
            "Python",
            "Tortoise",
            "Turtle",
        ];
    }
    shuffle() {
        for (let i = this.reptiles.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.reptiles[i];
            this.reptiles[i] = this.reptiles[j];
            this.reptiles[j] = temp;
        }
    }
    random(count = 1, allowDupes) {
        let selected = [];
        if (!allowDupes && count > this.reptiles.length) {
            throw new Error(`Can't ensure no dupes for that count`);
        }
        for (let i = 0; i < count; i++) {
            if (allowDupes) {
                // Dupes are cool, so let's just pull random reptiles
                selected.push(this.reptiles[Math.floor(Math.random() * this.reptiles.length)]);
            }
            else {
                // Dupes are no go, shuffle the array and grab a few
                this.shuffle();
                selected = this.reptiles.slice(0, count);
            }
        }
        return selected;
    }
}
const reptile = new Reptile();
console.log(`With Dupes: ${reptile.random(10, true)}`);
console.log(`And Without: ${reptile.random(10)}`);

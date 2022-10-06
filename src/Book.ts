export class Book{

    name : string;
    rating : number;

    constructor(name : string, rating : number)
    {
        this.name = name;
        this.rating = rating;

    }

    set SetRating(a : number){
        if(a < 0 || a > 10) {
                throw new Error('A bemeneti érték egy és 10 között lehet csak!')
        }
        this.rating = a;
    }

    toString() : string {
        return this.name + " - " + this.rating;
    }

}
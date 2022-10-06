import { Book } from './Book';

let lista : Book[] = [];

lista.push(new Book('Könyvcim',8));
lista.push(new Book('Könyvcim2',5));
lista.push(new Book('Könyvcim3',2));

for (let e of lista)
{
    console.log(e);
}


console.log('7 - nél nagyobb értékelésű könyvek:');

for (let e of lista)
{   
    if (e.rating > 7){
    console.log(e);
    }
}

function bestof(lista : Book[])
{
    let elem : Book = lista[0];

    for(let i=1; i <lista.length; i++)
    {
        if (lista[i].rating > elem.rating)
        {
            elem = lista[i];
        }
    }
    return elem;

}


console.log(bestof(lista));
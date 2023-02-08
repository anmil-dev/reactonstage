import bwstage from '../../../public/assets/img/bwstage.jpg';
import lightstrio from '../../../public/assets/img/lightstrio.jpg';
import streetbandcover from '../../../public/assets/img/streetbandcover.jpg';

export const EVENTS = [
    {
        id: 0,
        name: 'Rockin Out',
        image: bwstage,
        category: 'rock',
        date: new Date(2023,4,20,16,30),
    },
    {
        id: 1,
        name: 'Funky Rage',
        image: lightstrio,
        category: 'rock',
        date: new Date(2023,5,25,16,30),
    },
    {
        id: 2,
        name: 'Nerve Wanna',
        image: streetbandcover,
        category: 'alternative',
        date: new Date(2023,6,10,16,30),
    }
];


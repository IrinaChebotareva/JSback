type A = {
    age?: number | string,
    nick: string,
    info: [],
    photo?: null | string
}

const a1: A = {
    age: 10,
    nick: 'mynick',
    info: [1, 100],
    photo: 'string',
};

const a2: A = {
    age: '10 years',
    nick: '',
    info: { id: 100 },
    photo: null,
};

const a3: A = {
    nick: '       ',
    info: ['secret', 'key'],
};
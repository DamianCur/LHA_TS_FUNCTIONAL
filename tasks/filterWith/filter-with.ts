interface IsData {
    _id: string,
    age: number,
    eyeColor: string,
    name: string,
    gender: string,
    company: string,
    email: string,
    phone: string,
    tags: string[],
    friends: IsFriends[]
}

interface IsFriends {
    id: number,
    name: string
}

interface Data {
    [key: string]: any
}

const data: Record<string, unknown>[] = [{
    _id: "5e985a07feddae7617ac44f6",
    age: 24,
    eyeColor: "brown",
    name: "Cummings Baxter",
    gender: "male",
    company: "VELOS",
    email: "cummingsbaxter@velos.com",
    phone: "+1 (907) 482-2451",
    tags: ["labore", "elit", "excepteur", "nisi", "mollit", "anim", "aliquip"],
    friends: [{
        id: 0,
        name: "Sheppard Jensen",
    },],
},
{
    _id: "5e985a0709dfa1e6fd93c6ad",
    age: 32,
    eyeColor: "brown",
    name: "Madelyn Dickson",
    gender: "female",
    company: "KENGEN",
    email: "madelyndickson@kengen.com",
    phone: "+1 (984) 521-2439",
    tags: ["nisi", "veniam", "dolore", "officia", "ex", "non", "pariatur"],
    friends: [{
        id: 0,
        name: "Bruce Barton",
    },
    {
        id: 1,
        name: "Juliet Schmidt",
    },
    {
        id: 2,
        name: "Horton Haley",
    },
    {
        id: 3,
        name: "Herminia Witt",
    },
    ],
},
{
    _id: "5e985a0737e2306e9aef6ecd",
    age: 26,
    eyeColor: "blue",
    name: "Mcguire Mercado",
    gender: "male",
    company: "LINGOAGE",
    email: "mcguiremercado@lingoage.com",
    phone: "+1 (963) 450-2194",
    tags: ["cupidatat", "occaecat", "amet", "qui", "elit", "esse", "deserunt"],
    friends: [{
        id: 0,
        name: "Loraine Harper",
    },
    {
        id: 1,
        name: "Luann Randall",
    },
    {
        id: 2,
        name: "Obrien Rich",
    },
    {
        id: 3,
        name: "Noble Wilkerson",
    },
    ],
},
{
    _id: "5e985a07148cfba58c860ec2",
    age: 26,
    eyeColor: "brown",
    name: "Marina Porter",
    gender: "female",
    company: "GORGANIC",
    email: "marinaporter@gorganic.com",
    phone: "+1 (867) 417-3497",
    tags: ["laborum", "aliquip", "sit", "adipisicing", "aute", "cupidatat", "aliquip"],
    friends: [{
        id: 0,
        name: "Blair Hill",
    },
    {
        id: 1,
        name: "Ebony Jimenez",
    },
    ],
},
{
    _id: "5e985a074984f9f08ccaaa4c",
    age: 25,
    eyeColor: "green",
    name: "Barlow Ferguson",
    gender: "male",
    company: "TOYLETRY",
    email: "barlowferguson@toyletry.com",
    phone: "+1 (837) 484-2231",
    tags: ["est", "dolor", "minim", "ut", "anim", "culpa", "non"],
    friends: [{
        id: 0,
        name: "Delacruz Acevedo",
    },
    {
        id: 1,
        name: "Gloria Tanner",
    },
    {
        id: 2,
        name: "Cantrell Myers",
    },
    {
        id: 3,
        name: "Fisher Leonard",
    },
    ],
},
];

type phrase<T> = T

const checkArray = (arr: any[], phrase: string): any[] => {
    return arr.filter(el => {
        const regEx = new RegExp(`${phrase}`)
        switch (true) {
            case typeof el === 'string':
                return el.match(regEx);

            case typeof el === "number":
                const elToString = el.toString();
                return elToString.match(regEx);

            case Array.isArray(el):
                const values = checkArray(el, phrase);
                return values.length > 0

            case Object.prototype.toString.call(el) === "[object Object]":
                const value = checkArray(Object.values(el), phrase);
                return value.length > 0
            default:
                return false
        }
    })
}

function filterWith(arr: IsData[], phrase: string) {
    if (phrase.length <= 2) return [];

    const coppyArr = [...arr];

    const test = coppyArr.filter(el => {
        const values = Object.values(el);
        const result = checkArray(values, phrase);
        return result.length > 0
    });

    return test
};


//148 linijka błąd metody jakby nie była w prototypie el
//168 linijka brak metody length w prototypie... zle napisany typ generyczny??

// Library, Cart, DynamicSwitch
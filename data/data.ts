export type TeamMember = {
    name : string
    time : number
    role : 'TL' | 'FE Dev' | 'BE Dev' | 'Mobile Dev' | 'Designer' | 'PO' | 'DevOps'
};

export type Team = {
    name : string
    members : TeamMember[]
};


export const Teams : Team[] = [
    {
        name: "Wedo",
        members: [
            {
                name: "Luca",
                role: "TL",
                time: 2
            },
            {
                name: "Giulio",
                role: "BE Dev",
                time: 2
            },
            {
                name: "Matteo",
                role: "FE Dev",
                time: 2
            },
            {
                name: "Denise",
                role: "FE Dev",
                time: 2
            },
            {
                name: "Gianmarco",
                role: "FE Dev",
                time: 2
            },
            {
                name: "Dima",
                role: "FE Dev",
                time: 2
            },
            {
                name: "Viktor",
                role: "BE Dev",
                time: 2
            },
            {
                name: "Valerio",
                role: "Designer",
                time: 2
            },
            {
                name: "Sara",
                role: "Designer",
                time: 2
            },
            {
                name: "Josefine",
                role: "PO",
                time: 2
            },
            {
                name: "Massimo",
                role: "DevOps",
                time: 2
            },

        ]
    },
    {
        name: "Mobile",
        members: [
            {
                name: "Luca",
                role: "TL",
                time: 2
            },
            {
                name: "Enrico",
                role: "Mobile Dev",
                time: 2
            },
            {
                name: "Alessio",
                role: "Mobile Dev",
                time: 2
            },
            {
                name: "Sara",
                role: "Designer",
                time: 2
            },
        ]
    }
]

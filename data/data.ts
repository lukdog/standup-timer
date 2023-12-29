export type TeamMember = {
    name : string
    time : number
    role : 'TL' | 'FE Dev' | 'BE Dev' | 'Mobile Dev' | 'Designer' | 'PO' 
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
                time: 1
            },
            {
                name: "Matteo",
                role: "FE Dev",
                time: 1
            },
            {
                name: "Denise",
                role: "FE Dev",
                time: 1
            },
            {
                name: "Gianmarco",
                role: "FE Dev",
                time: 1
            },
            {
                name: "Dima",
                role: "FE Dev",
                time: 1
            },
            {
                name: "Viktor",
                role: "BE Dev",
                time: 1
            },
            {
                name: "Valerio",
                role: "Designer",
                time: 1
            },
            {
                name: "Sara",
                role: "Designer",
                time: 1
            },
            {
                name: "Josefine",
                role: "PO",
                time: 1
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
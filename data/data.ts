export type TeamMember = {
    name : string
    time : number
    role : 'TL' | 'FE Dev' | 'BE Dev' | 'Mobile Dev' | 'Designer' | 'PO' | 'DevOps' | 'QA Engineer' | 'Member'
};

export type Team = {
    name : string
    members : TeamMember[]
};


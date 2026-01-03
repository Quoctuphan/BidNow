

interface News {
    id:string;
    name: string;
    detail: string;
    date: Date|string;
    author: string;
    action: React.ReactNode
}

export type{News}

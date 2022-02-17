export interface IHome {
    name: string,
    title: string,
    count: number
}

export interface ILogin {
    email: string,
    password: string,
    remember?: string
}
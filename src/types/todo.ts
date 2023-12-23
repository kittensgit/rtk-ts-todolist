export interface ITodo {
    userId?: number;
    id: string | number;
    title: string;
    complete: boolean;
    createdAt?: Date;
}

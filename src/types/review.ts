import { User } from './user';

export type Review = {
    id: string;
    rating: number;
    user: User;
    date: string;
    comment: string;
};

export type Reviews = Review[];
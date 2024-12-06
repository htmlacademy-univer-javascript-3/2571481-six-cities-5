import { SomePerson } from './user';

export type ReviewData = {
    id: string;
    comment: string;
    rating: number;
}

export type Review =  ReviewData & {
    date: string;
    user: SomePerson;
};

export type Reviews = Review[];

import { Member } from './member';


export interface Card {
    id: number;
    createDate: Date;
    dueDate: Date;
    memberId: number;
    member: Member;
}

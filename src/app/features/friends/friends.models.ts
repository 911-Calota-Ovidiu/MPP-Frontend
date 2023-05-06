import { ChildDTO } from "../children/children.models";

export interface Friend{
    id:number;
    person:ChildDTO;
    friends:ChildDTO;
}
export interface FriendDTO{
    person:ChildDTO;
    friends:ChildDTO;
}
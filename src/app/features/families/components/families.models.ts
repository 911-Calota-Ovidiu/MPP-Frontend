import { ChildDTO } from "../../children/children.models";

export interface Family{
    mom:number;
    homeAddress:string;
    dad:number;
    nrOfMembers:number;

}
export interface FamilyDTO{
    famID:number;
    nrOfMembers:number;
    mom:number;
    dad:number;
    children:ChildDTO[];
    homeAddress:string;
}
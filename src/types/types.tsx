import { characterEntity } from "../interfaces/character";
import { characterDetailEntity } from "../interfaces/characterDetail";
import { MemberEntity } from "../interfaces/member";
import { MemberDetailEntity } from "../interfaces/memberDetail";

export interface MembersList {
    members: MemberEntity[];
}

export interface CharacterList {
    characters: characterEntity[];
}

export interface MemberDetail {
    member: MemberDetailEntity;
}

export interface CharacterDetail {
    character: characterDetailEntity;
}
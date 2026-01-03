import { Gender } from "@/constants/Gender";
import { Role } from "@/constants/Role";

export interface User {
    id: number;
    fullName: string;
    email: string;
    userName: string;
    password: string;
    dateOfBirth: Date;
    phoneNumber: string;
    gender: Gender;
    role: Role;
    avatar?: string;
    status: string;
    cover: string;
    bio: string;
    ins: string;
    facebook: string;
    created_at: Date;
}

export type UserResponse = {
    id: number;
    fullName: string;
    userName: string;
    email: string;
    dateOfBirth: Date;
    phoneNumber: string;
    gender: string;
    avatar: string;
    bio: string;
    status: string;
    ins: string;
};

export type UserPayload = Omit<User, 'id' | 'status'>;

export type createUserPayload = {
    fullName: string;
    email: string;
    userName: string;
    password: string;
    dateOfBirth: Date;
    phoneNumber: string;
    gender: Gender;
    role: Role;
    avatar?: string;
};
import { Types, Document } from 'mongoose';
import { AddressType } from './address.types.ts'

export type RolesType  = "user" | "admin";
export type AuthProviderType  = "credentials" | "google" | "github";

export interface UserType extends Document {
    _id: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    imageUrl: string;
    role: RolesType;
    provider: AuthProviderType;
    addresses: AddressType[];
    wishlist: string[];
    createdAt: Date;
    updatedAt: Date;
}
// NEED IMAGE URL for avatar
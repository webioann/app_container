import { Types, Document } from 'mongoose';
import { ProductType } from './product.types.ts';
export interface CartItemType {
    product: ProductType;
    quantity: number;
}

export interface CartType extends Document{
    // ref User model ID ==
    userId: Types.ObjectId;
    carItemsList: CartItemType[];
    createdAt: Date;
    updatedAt: Date;
}

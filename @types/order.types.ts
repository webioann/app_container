import { Types, Document } from 'mongoose';
import { AuthProviderType } from './user.types';
import { ShippingAddressType } from './address.types';

export type OrderStatusType = "pending" | "shipped" | "delivered";

export interface OrderItemType {
    // ref to Product model id ==
    productId: Types.ObjectId;
    productName: string;
    price: number;
    quantity: number;
    image: string;
}
export interface OrderType {
    userId: string;
    provider: AuthProviderType;
    orderItemsList: OrderItemType[];
    shippingAddress: ShippingAddressType;
    paymentStatus: {
        id: string;
        status: "processing" | "succeeded" | "canceled";
    };
    totalPrice: number;
    status: OrderStatusType;
    orderedAt: Date;
    shippedAt: Date;
    deliveredAt: Date;
}

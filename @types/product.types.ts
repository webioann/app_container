import mongoose, { Types } from 'mongoose';

export interface ProductType extends mongoose.Document {
    _id: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    images: string[];
    averageRating: number;
    totalReviews: number;
    createdAt: string;
    // updatedAt: string;
}

import { Schema } from 'mongoose'
interface comment {
    name: string
    email: string
    comment: string
}
export const commentSchema = new Schema<comment>(
    {
        comment: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
)

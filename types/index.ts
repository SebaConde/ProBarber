import { insertServiceSchema } from "@/lib/validators"
import z from "zod"

export type Service= z.infer<typeof insertServiceSchema> & {
    id: string,
    createdAt: Date
}
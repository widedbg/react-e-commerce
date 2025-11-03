import {z} from 'zod';
export const UserShema = z.object({
    first_name: z.string().min(1,"First name is required"),
    last_name: z.string().min(1,"Last name is required"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8,"Password must be at least 8 characters"),
    confirm_password: z.string().min(8,"Please confirm your password"),
    address: z.string().min(1,"Address is required"),
    
}

).refine((data) => data.password === data.confirm_password,{
    message :"Passwords do not match",
     path: ["confirm_password"],
})
export type User =z.infer<typeof UserShema>;
export const LoginShema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8,"Password must be at least 8 characters"),

}

);
export type TLogin =z.infer<typeof LoginShema>;


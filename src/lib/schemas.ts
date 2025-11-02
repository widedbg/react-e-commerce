import {z} from 'zod';
export const UserShema = z.object({
    first_name: z.string().min(1,"First name is requires"),
    last_name: z.string().min(1,"Last name is requires"),
    email: z.string().email("Invalid email adress"),
    password: z.string().min(8,"Wrong password"),
    confirm_password: z.string().min(8,"Wrong password"),
    address: z.string().min(1,"Adress is requires"),
    
}

).refine((data) => data.password === data.confirm_password,{
    message :"Password do not match",
})
export type User =z.infer<typeof UserShema>;
export const LoginShema = z.object({
    email: z.string().email("Invalid email adress"),
    password: z.string().min(8,"first name is requires"),

}

);
export type TLogin =z.infer<typeof LoginShema>;


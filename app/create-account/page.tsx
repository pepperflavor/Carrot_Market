"use client"
import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";

import { useFormState } from "react-dom";
import createAccount from './action';
import { error } from 'console';
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";



export default function CreateAccount(){

    const [state, action] = useFormState(createAccount, null)

    return(
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">회원가입 페이지입니다.</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <Input 
                name="username" 
                type="text" 
                placeholder="Username" 
                errors={state?.fieldErrors.username}
                required
                minLength={3}
                maxLength={10}
                />
                <Input 
                name="email" 
                type="text" 
                placeholder="Email" 
                errors={state?.fieldErrors.email}
                required  
                />
                <Input 
                name="password" 
                type="password" 
                placeholder="Password" 
                errors={state?.fieldErrors.password}
                required 
                minLength={PASSWORD_MIN_LENGTH}
                 />
                <Input 
                name="confirmPassword" 
                type="password" 
                placeholder="Confirm Password" 
                errors={state?.fieldErrors.confirm_password}
                required  
                minLength={PASSWORD_MIN_LENGTH}
                />
                <Button text="Create Account"/>
            </form>
            <SocialLogin/>
        </div>
    )
}
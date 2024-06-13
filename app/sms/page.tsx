"use client"

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";

import smsLogIn from "./action";


const initialState = {
    token : false,
    error : undefined
   
}

export default function SMSLogin(){

    const [state, action] = useFormState(smsLogIn, initialState)

    return(
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Login</h1>
                <h2 className="text-xl">Verify your phone number</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
            
                    {state.token ? (
                           <Input 
                           type="number"
                           placeholder="Vertification code"
                           required 
                           name="token"/>
                    ) : 
                    <Input 
                    type="number"
                    placeholder="Phone number"
                    required 
                    errors={state.error?.formErrors} 
                    name="phone"/>}
             
                <Button text={state.token ? "Verify Token" : "Send Verification SMS"}/>
            </form>
        </div>
    )
}
import { error } from "console";
import { InputHTMLAttributes } from "react";

interface InputProps{
    name: string,
    errors?: string[]
}

export default function Input({
    name, 
    errors = [],
    ...rest
}: InputProps 
    & InputHTMLAttributes<HTMLInputElement>){

    return(
        <div className="flex flex-col gap-2">
            <input className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400 pl-2" 
            name={name}
            {...rest}
           />
        {errors?.map((error, index)=> (
            <span className=" text-red-500 font-medium" key={index}>{error}</span>
        ))}
    </div>
    )
}
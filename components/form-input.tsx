import { error } from "console";

interface FormInputProps{
    type : string,
    placeholder: string,
    required : boolean,
    errors : string[]
}

export default function FormInput({type, placeholder, required, errors}: FormInputProps){
    return(
        <div className="flex flex-col gap-2">
            <input className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400 pl-2" type={type} placeholder={placeholder} required={required}/>
        {errors.map((error, index)=> (
            <span className="text-red-500 font-medium" key={index}>{error}</span>
        ))}
    </div>
    )
}
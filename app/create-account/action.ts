"use server"

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod"




// const checkUsername = (username: string) => !username.includes("potato")


// const checkPassword = ({password, confirmPassword} : {password : string, confirmPassword : string}) => password === confirmPassword

const checkUniqueUsername = async(username: string) => {
  const user = await db.user.findUnique({
    where: {
      username: username,
    },
    select:{
      id: true
    }
  })

  // if(user){
  //   return false
  // }else{
  //   return true
  // }

  return !Boolean(user)
}

const checkUniqueEmail = async(email : string)=>{
  const user = await db.user.findUnique({
    where: {
      email : email
    },
    select :{
    id: true
  }
  })

  return !Boolean(email)
}


const formSchema = z.object({
    username : z.string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username?"
    })
    .toLowerCase()
    .trim()
    // .transform((username) => `oTo/ ${username}`)
    .refine(
        (username) => !username.includes("potato"),
        "No potatoes allowed!"
      )
      .refine(checkUniqueUsername, "This Username is already taken"),
      email: z.string().email().toLowerCase(),
      password: z
      .string()
      .min(PASSWORD_MIN_LENGTH)
      // .regex(
      //   PASSWORD_REGEX,
      //   PASSWORD_REGEX_ERROR
      // )
      ,
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "Two passwords should be equal",
        path: ["confirm_password"],
      });
    }
  });


export default async function createAccount(preState:any, formData : FormData ){

    const data = {
        username : formData.get("username"),
        email : formData.get("email"),
        password : formData.get("password"),
        confirmPassword : formData.get("confirmPassword")
    }

    const result = formSchema.safeParse(data)
     
    if(!result.success){  
        return result.error.flatten()
     }else{
      // 입력받은 값이 이미 가입한 정보인지 확인


     }
}
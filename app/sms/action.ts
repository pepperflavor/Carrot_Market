"use server"

import { z } from "zod"
import validator from "validator"
import { redirect } from "next/navigation"
import { error } from "console"

// refine(validator.isMobilePhone) == refine(phone => validator.isMobilePhone(phone) )
const phoneSchema = z.string().trim().refine(validator.isMobilePhone)

// z.string이 아닌 z.coerce 를 사용해야함
// 기본적으로 유저에게 입력받는 값은 string으로 처리하기 때문
// z.coerce.number() :  string을 number로 처리해달라는 뜻
const tokenSchema = z.coerce.number().min(100000).max(999999)


interface ActionState{
    token: boolean
}

export default async function smsLogIn(preState: ActionState, formData : FormData ){
    const phone = formData.get("phone")
    const token = formData.get("toekn")

    // preState.token === false 와 같은 뜻
    // 이 상태는 action이 처음 실행되었다는 뜻이다.
    if(!preState.token ){
        const result = phoneSchema.safeParse(phone)
        if(!result.success){
            console.log(result.error.flatten())
            return {
                token : false,
                error : result.error.flatten()
            }
        }else{
            return{
                token: true
            }
        }
    }else{
        // token 검증시작
        const result = tokenSchema.safeParse(token)
        if(!result.success){
            return{
                token : true,
                error: result.error.flatten()
                // 값이 틀려도 토큰 창을 숨기진 않음
            }
        }else{
            // 인증 성공시 액션 추가
            redirect("/")
        }
    }
}

















// export default async function smsLogIn(prevState: ActionState, formData: FormData) {
//     const phone = formData.get("phone");
//     const token = formData.get("token");
//     if (!prevState.token) {
//       const result = phoneSchema.safeParse(phone);
//       if (!result.success) {
//         return {
//           token: false,
//           error: result.error.flatten(),
//         };
//       } else {
//         return {
//           token: true,
//         };
//       }
//     } else {
//       const result = tokenSchema.safeParse(token);
//       if (!result.success) {
//         return {
//           token: true,
//           error: result.error.flatten(),
//         };
//       } else {
//         redirect("/");
//       }
//     }
//   }
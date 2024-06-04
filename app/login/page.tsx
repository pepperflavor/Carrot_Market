import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";


export default function Login(){

    const handleForm = async()=>{
        "use server"
        console.log("i'm in server")
    }
    return(
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">돌아오셔서 기뻐요</h2>
            </div>
            <form action={handleForm} className="flex flex-col gap-3">
                <FormInput type="text" placeholder="Email" required errors={[]}/>
                <FormInput type="password" placeholder="Password" required errors={[]}/>
                <FormButton loading={false} text="Login"></FormButton>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    )
}
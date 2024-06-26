import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function SocialLogin(){
    return(
        <>
            <div className="w-full h-px bg-neutral-500"/>
            <div className="flex flex-col gap-3">
                <Link className="primary-btn flex h-10 items-center justify-center gap-2" href={"/github"}>
                    <span><FaGithub className="size-6"/> </span>
                    <span>Sign up with Github</span>
                </Link>
                <Link className="primary-btn flex h-10 items-center justify-center gap-2" href={"/sms"}>
                    <span><ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6"/> </span>
                    <span>Sign up with Github</span>
                </Link>
            </div>
        </>
    )
}
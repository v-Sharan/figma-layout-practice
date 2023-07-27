import Image from "next/image";

import Input from "@/ui/Input";
import Button from "@/ui/Button";

import { useRouter } from "next/router";

import { Separator } from "@/components/ui/separator";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex mx-auto my-20 bg-white w-[60%] rounded-xl shadow-sm">
      <Image src="/images/login.png" width={500} height={200} />
      <div className="w-[51%]">
        <div className="py-10 px-10 flex flex-col justify-center gap-5">
          <h1 className="font-bold text-3xl mb-16">Login</h1>
          <div className="flex flex-col gap-3">
            <Input label={"E-mail:"} type="text" name={"Email"} />
            <Input label={"Password:"} type="password" name={"password"} />
          </div>
          <p className="flex justify-end text-neutral-600 font-bold">
            Forget password?
          </p>
          <Button onClick={() => router.push("/dashboard")}>Login</Button>
          <div className="flex items-center gap-3 w-[45%]">
            <Separator />
            <p className="text-neutral-400">or</p>
            <Separator />
          </div>
          <Button type={"gost"}>Register now</Button>
        </div>
      </div>
    </div>
  );
}

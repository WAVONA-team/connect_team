"use client";
import AuthButton from "@/components/auth/authButton";
import google from "@/assets/google.svg";
import github from "@/assets/github.svg";
import vk from "@/assets/vk.svg";
const Login = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-40 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-4xl font-normal text-white">
          Войдите в систему
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="grid grid-rows-3 gap-4">
          <AuthButton
            image={google as HTMLImageElement}
            text={"Continue with Google"}
            provider={"google"}
          />
          <AuthButton
            image={github as HTMLImageElement}
            text={"Continue with GitHub"}
            provider={"github"}
          />
          <AuthButton
            image={vk as HTMLImageElement}
            text={"Continue with VK"}
            provider={"vk"}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

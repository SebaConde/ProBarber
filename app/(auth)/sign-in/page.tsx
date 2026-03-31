import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import CredentialsSignInForm from "./credentials-sign-in-form";

export const metadata: Metadata = {
  title: "Registro",
};

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardContent className="space-y-4">
            <Link href="/" className="flex justify-center">
              <Image
                src="/assets/barber.png"
                alt={`${APP_NAME} logo`}
                width={100}
                height={100}
                priority={true}
              />
            </Link>
            <CardTitle className="text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Ingresa a tu cuenta
            </CardDescription>
            <CardContent className="space-y-4">
              <CredentialsSignInForm /> 
            </CardContent>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;

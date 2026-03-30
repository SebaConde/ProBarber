import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@/lib/constants";


const SignInPage = () => {
    return ( 
        <div>
            <Card>
                <CardContent className='space-y-4'>
                    <Link href='/' className='flex-center'>
                        <Image src='/assets/barber.png' alt={`${APP_NAME} logo`} width={100} height={100} priority={true}/>
                    </Link>
                    <CardTitle className="text-center">Sign in</CardTitle>
                    <CardDescription className="text-center">Sign in to your account</CardDescription>
                    <CardContent className="space-y-4">
                        {/* <CredentialsSignInForm /> */}
                    </CardContent>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default SignInPage;
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VerifyEmail = () => {
    return (
        <div className="flex justify-center items-center flex-col gap-y-7 min-h-[80vh] p-10 text-gray-700 max-w-[700px] mx-auto text-center text-sm ">
            <h2 className="text-4xl font-bold text-black">Please verify your email...</h2>
            <div className="relative">
                <h1 className="text-7xl font-bold">
                    <FontAwesomeIcon icon={fas.faEnvelope} />
                    
                </h1>
                <p className="text-3xl border-2 border-white text-primary rounded-full w-10 h-10 flex justify-center items-center bg-white absolute top-[-5px] right-[-17px]"><FontAwesomeIcon icon={fas.faCircleCheck} /></p>
            </div>
            <p>Please verify your email address. We've sent a confimation email to:</p>
            <p><strong>account@refero.design</strong></p>
            <p>Click the confirmation link in that email to begin using Dribbble.</p>
            <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className="text-primary font-bold">resend the confirmation email.</span></p>

            <p>Wrong email address? <span className="text-primary font-bold">Change it.</span></p>
        </div>
    );
};

export default VerifyEmail;
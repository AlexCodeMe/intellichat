import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp"

type Props = {
    setOTP: React.Dispatch<React.SetStateAction<string>>
    onOTP: string
}

export default function OTPForm({ onOTP, setOTP }: Props) {
    return (
        <>
            <h2 className="text-gravel md:text-4xl font-bold">Enter OTP</h2>
            <p className="text-iridium md:text-sm">
                Enter the one time password that was sent to your email.
            </p>
            <div className="w-full justify-center flex py-5">
                <OTPInput
                    otp={onOTP}
                    setOtp={setOTP}
                />
            </div>
        </>
    )
}

function OTPInput({ otp, setOtp }: {
    otp: string
    setOtp: React.Dispatch<React.SetStateAction<string>>
}) {
    return (
        <InputOTP
            maxLength={6}
            value={otp}
            onChange={(otp) => setOtp(otp)}
        >
            <div className="flex gap-3">
                <div>
                    <InputOTPSlot index={0} />
                </div>
                <div>
                    <InputOTPSlot index={1} />
                </div>
                <div>
                    <InputOTPSlot index={2} />
                </div>
                <div>
                    <InputOTPSlot index={3} />
                </div>
                <div>
                    <InputOTPSlot index={4} />
                </div>
                <div>
                    <InputOTPSlot index={5} />
                </div>
            </div>
        </InputOTP>
    )
}
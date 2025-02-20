'use client'

import { useChangePassword } from "@/hooks/use-settings"
import FormGenerator from "../forms/form-generator"
import { Button } from "../ui/button"
import Loader from "../custom/loader"

export default function ChangePassword() {
    const { register, errors, onChangePassword, loading } = useChangePassword()

    return (
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1">
        <p className="text-sm font-medium">Change Password</p>
        <p className="text-sm font-light">Reset your password</p>
        </div>
        <form
          onSubmit={onChangePassword}
          className="lg:col-span-4"
        >
          <div className="lg:w-[500px] flex flex-col gap-3">
            <FormGenerator
              register={register}
              errors={errors}
              name="password"
              placeholder="New Password"
              type="text"
              inputType="input"
            />
            <FormGenerator
              register={register}
              errors={errors}
              name="confirmPassword"
              placeholder="Confirm Password"
              type="text"
              inputType="input"
            />
            <Button className="bg-grandis text-gray-700 font-semibold">
              <Loader loading={loading}>Change Password</Loader>
            </Button>
          </div>
        </form>
      </div>
    )
}

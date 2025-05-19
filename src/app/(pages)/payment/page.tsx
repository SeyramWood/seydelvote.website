'use client'
import { useState } from 'react';

import {
  BanknoteArrowDown,
  PhoneIcon,
} from 'lucide-react';

import { CustomInput } from '@/app/_element-component/input/input';

// import { BankIcon, Phone } from "lucide-react"

export default function Page() {
    const [paymentMethod, setPaymentMethod] = useState("momo")

    return (
        <div className="min-h-screen flex items-center justify-center  p-4">
            
            <div className=" bg-appLightOrange rounded-2xl shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Payment</h2>

                <form className="space-y-7">
                    {/* <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full border border-gray-300 rounded-lg p-2"
                    /> */}

                    {paymentMethod === "card" && (
                        <>
                            <CustomInput
                                name=''
                                type="text"
                                placeholder="Card number"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                            <CustomInput
                                name=''
                                type="text"
                                placeholder="MM/YY"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                            <input
                                type="text"
                                placeholder="Name on card"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                            <select className="w-full border border-gray-300 rounded-lg p-2">
                                <option value="ghana">Ghana</option>
                            </select>
                        </>
                    )}

                    {paymentMethod === "momo" && (
                        <CustomInput
                            name=''
                            type="tel"
                            placeholder="Mobile Money Number"
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    )}

                    {paymentMethod === "bank" && (
                        <>
                            <CustomInput
                                name=''
                                type="text"
                                placeholder="Bank Name"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                            <CustomInput
                                name=''
                                type="text"
                                placeholder="Account Number"
                                className="w-full border border-gray-300 rounded-lg p-2"
                            />
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg"
                    >
                        Pay
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-2 text-gray-500 text-sm">Or pay with</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <div className="space-y-2">
                    <button
                        onClick={() => setPaymentMethod("momo")}
                        className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
                    >
                        <PhoneIcon className="mr-2 h-5 w-5" />
                        Mobile Money
                    </button>
                    <button
                        onClick={() => setPaymentMethod("bank")}
                        className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50"
                    >
                        <BanknoteArrowDown className="mr-2 h-5 w-5" />
                        Bank
                    </button>
                </div>
            </div>
        </div>
    )
}

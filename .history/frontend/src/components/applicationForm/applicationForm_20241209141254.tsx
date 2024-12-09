"use client"

import React, { useEffect, } from "react";

import InputForm from "../inputForm/inputForm";
import placeholder from '../../../public/placeholder.png'
import Image from "next/image";
import axios from 'axios'
import { useGeneralContext } from "@/context/context";

 const applicationQuestions = [
    {    
        title:'name',
        question: 'Seller name',
        placeholder: 'Enter applicant name here',
        required: true,
    },

    {
        title:'email',
        question: "Seller email",
        placeholder: 'Enter applicant email here',
        isEmail: true,
        required: true,
    },
    {
      title:'phone',
        question: 'Seller telephone number',
        placeholder: 'Enter applicant telephone number here',
        isPhoneNumber: true,
        required: true,
    },
    {
      title:'address',
      question:'Property address',
      placeholder:'Property address',
      required:true
    },
    {
      title:'city',
      question:'City',
      placeholder:'Enter city here',
      required:true
    },

  ]


const ApplicationForm = () => {


    const { applicationFormState, setApplicationFormState } = useGeneralContext()

    // name, email, phone, address,
    //     city,province,reason,time

    useEffect(()=>{
        // console.log(
        //     'application',
        //     applicationFormState
        // )
    },[applicationFormState])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

    
        try {
            const response = await axios.post('/api/sendEmail', {
                name: applicationFormState.name,
                email: applicationFormState.email,
                phone: applicationFormState.phone,
                city: applicationFormState.city,
                province: applicationFormState.province,
                reason: applicationFormState.reason,
                time: applicationFormState.time,
                address: applicationFormState.address,

            });
            // console.log(response.data);
            alert('Form submitted successfully!');
            setApplicationFormState({ name: '', email: '', phone: '', projectDetails: '' });
        } catch (error) {
            // console.log('username',process.env.EMAIL_USER);
            // console.log('password',process.env.GMAIL_PASSWORD)
            console.error('Error submitting form:', error);
            alert('Failed to submit form.');
        }
    };

    return (
        <section className="w-screen flex flex-col ml-auto
        mr-auto md:flex-row  mb-8 
        bg-blue-200 justify-around max-w-[1200px]
           ">
            
            <section className="  ">
                <h3 className="text-2xl text-center
                mt-4 mb-4 text-black">Your name here
                </h3>
               <Image
               src={placeholder}
               alt='logo'
               className='w-[40vw] mx-auto
               max-w-[445px]
               max-h-[550px]'
               width={1200}
               height={630}
               />
            </section>
            <section className="
            md:w-[50vw] max-h-[550px]
            overflow-y-scroll">
                <h3 className="mt-4 mb-[-2rem] text-black text-left pl-6 max-w-[455px] mx-auto md:pl-7 md:text-lg">
                  Here is where your clients can submit their Information

                </h3>
                <InputForm
                questions={applicationQuestions}
                />
                <button onClick={handleSubmit}
                className="bg-blue-400 p-3 rounded-xl
                ml-9 mb-8">
                    Submit form
                </button>


            </section>
        </section>
    )
}


export default ApplicationForm
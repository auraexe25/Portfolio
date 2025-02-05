"use client";
import Image from 'next/image';
import { contactinfo } from 'Data/Data';
import Link from 'next/link';

const ContactInfo = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-black to-[#27004d] p-4 md:p-16 shadow-lg w-full">
            <div className="flex flex-col text-left text-white max-w-2xl w-full md:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold">
                    {contactinfo.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mt-4 md:mt-6">
                    {contactinfo.description}
                </p>
                <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-4">
                    <Link href="mailto:veenasahu195@gmail.com"><Image src="/assets/email.svg" alt="Email" width={24} height={24} className="md:w-8 md:h-8" /></Link>
                        <span className="text-lg md:text-xl">{contactinfo.email}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                       <Link href="https://www.nitrkl.ac.in/" target="_blank"> <Image src="/assets/locationw.png" alt="Address" width={24} height={24} className="md:w-8 md:h-8" /></Link>
                        <span className="text-lg md:text-xl">{contactinfo.address}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                    <Link href="https://www.linkedin.com/in/veena-sahu2512/" target="_blank"><Image src="/assets/linkedinw.png" alt="LinkedIn" width={24} height={24} className="md:w-8 md:h-8" /></Link>
                        <span className="text-lg md:text-xl">{contactinfo.linkedin}</span>
                    </div>
                </div>
                <Link
                    href="mailto:veenasahu195@gmail.com"
                    className="mt-6 md:mt-8 bg-[#6d5efb] text-white py-3 md:py-4 px-4 text-lg md:text-xl font-medium rounded-lg hover:bg-blue-900 text-center hover:border hover:border-white inline-block"
                >
                    Send an email
                </Link>
            </div>
            <div className="mt-8 md:mt-0">
                <Image 
                    src="/assets/contactinfo.png" 
                    alt="Contact Illustration" 
                    width={400} 
                    height={400}
                    className="w-[250px] md:w-[400px] h-auto"
                />
            </div>
        </div>
    );
};

export default ContactInfo;

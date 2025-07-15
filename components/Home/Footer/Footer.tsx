"use client";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-black text-white flex flex-col items-center ">
            <Link href="" target="_blank"><div className="text-4xl font-thin font-heading py-6 mb-4 tracking-widest border-b border-white  w-full text-center">Veena Sahu</div></Link>
            <div className="flex space-x-2 ">
                <Link href="https://www.linkedin.com/in/veena-sahu2512/" target="_blank">
                    <div className="bg-white p-2 rounded-full">
                        <Image src="/assets/footer/linkedin.png" alt="LinkedIn" width={40} height={40} />
                    </div>
                </Link>
                <Link href="https://github.com/auraexe25" target="_blank">
                    <div className="bg-white p-2 rounded-full">
                        <Image src="/assets/footer/github.png" alt="GitHub" width={40} height={40} />
                    </div>
                </Link>
                <Link href="https://linktr.ee/veenasahu" target="_blank">
                    <div className="bg-white p-2 rounded-full">
                        <Image src="/assets/footer/linktree.png" alt="Linktree" width={40} height={40} />
                    </div>
                </Link>
                <Link href="https://www.instagram.com/_.veeenaa._/" target="_blank">
                    <div className="bg-white p-2 rounded-full">
                        <Image src="/assets/footer/instagram.png" alt="Instagram" width={40} height={40} />
                    </div>
                </Link>
                <Link href="https://x.com/Veena__Sahu" target="_blank">
                    <div className="bg-white p-2 rounded-full">
                        <Image src="/assets/footer/x.png" alt="X" width={40} height={40} />
                    </div>
                </Link>
                <Link href="https://medium.com/@veenasahu195" target="_blank">
                    <div className="bg-white p-2 rounded-full">
                        <Image src="/assets/footer/medium.webp" alt="X" width={40} height={40} />
                    </div>
                </Link>
            </div>
            <p className="text-lg mt-4 text-gray-400 mb-20">© 2025. All rights reserved</p>
        </div>
    );
};

export default Footer;

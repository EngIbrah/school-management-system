import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Children } from "react";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className=" flex">
        {/* {left side} */}
        <div className="w-[14%] md:w-[8%] xl:w-[16%] lg:w-[14%] ">
          <Link href={'/'} className="flex justify-center items-center lg:justify-start" >
           <Image src={"/logo.png"} alt="logo"  width={32} height={32}/>
           <span className="hidden lg:block">SMS</span>
           </Link> 
           <Menu />
        </div>
        {/* {Right side}  */}
        <div className="w-[86%] md:w-[92%] xl:w-[84%] lg:w-[86%] bg-[#F7F8FA] overflow-scroll">
         <Navbar />
         {children}
        </div>
        
    </div>
  );
}

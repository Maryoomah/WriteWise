import Link from "next/link";
import NavLink from "@/components/navlink";
export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          
          <h1 className="uppercase font-extrabold text-5xl md:text-6xl ">
            Write <span className="text-blue-900 ">Wise</span> 
          </h1>
          <div className="">
            <h4 className="text-base md:text-xl mt-4 italic ">AI-assisted Writing Revision</h4>
            <p className="text-base md:text-lg mt-4">
           Helping learners understand and implement teacher feedback through AI-guided revision.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-white mt-8">
            <NavLink href="/login">  Login to Dashboard </NavLink>
            <NavLink href="/register">New User? Create Account</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

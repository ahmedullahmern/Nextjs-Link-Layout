import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <section className="min-h-full  flex">
            <div className="w-1/4 border-r-4 border-purple-900 ">
                <Link className="active text-blue-600 underline hover:bg-purple-600 p-2 text-center w-full block mt-10" href={"/about/menu"}>
                    Menu
                </Link>
                <Link className="active text-blue-600 underline hover:bg-purple-600 p-2 text-center w-full block" href={"/about/service"}>
                    Services
                </Link>
            </div>
            <div className="w=2/3 ">
                {children}
            </div>
        </section>
    )
}
import Link from "next/link"

function services() {
    return (
        <div className="flex  justify-center items-center h-screen  flex-col">
            <h1 className="ml-96 text-5xl font-bold items-center text-center">
                Hello Services
            </h1>
            <Link className="bg-red-500 p-3 px-5 rounded-md"
                href="/about"
            >
                Go About
            </Link>
        </div>
    )
}

export default services
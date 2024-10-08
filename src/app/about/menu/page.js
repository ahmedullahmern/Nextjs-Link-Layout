import Link from "next/link"

function Menu() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-5xl font-bold">
                Hello Menu
            </h1>
            <Link className="bg-red-500 p-3 px-5 rounded-md"
                href="/about"
            >
                Go About
            </Link>
        </div>
    )
}

export default Menu
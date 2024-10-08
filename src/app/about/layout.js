export default function DashboardLayout({ children }) {
    return (
        <section className="min-h-full flex">
            <div className="w=1/3 bg-red-500">

            </div>
            <div className="w-2/3 ">
                {children}
            </div>
        </section>
    )
}
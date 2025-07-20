export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
            <div className="grid grid-cols-3 gap-4">
                <a href="/" className="text-center hover:underline">Create Game</a>
                <a href="/about" className="text-center hover:underline">About</a>
            </div>
            <h1 className="text-2xl font-bold">
                Jeopardy
            </h1>
        </nav>
    )
}
import Link from 'next/link'

export default function Header() {
    return (
        <div className="absolute text-white w-screen h-36 flex justify-between items-center px-20 text-lg" style={{backgroundColor: 'rgba(104, 134, 109, .7)'}}>
            <p>Home</p>
            <Link href='/another-page'>Another Page</Link>
        </div>
    )
}
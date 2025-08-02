import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div style={{height: "calc(100vh - 68px)"}} className="w-full flex items-center justify-center flex-col gap-10 text-center">
                <div className="flex flex-col gap-5">
                    <div className="text-4xl font-semibold">{"[404] Not Found"}</div>
                    <div className="text-lg text-text-300">You find yourself in an elevator with one button:</div>
                </div>
                <div>
                    <Link href="/">{"=> Main Floor"}</Link>
                </div>
            </div>
        </>
    )
}
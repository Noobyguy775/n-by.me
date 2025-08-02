export default function Footer() {
    return (
        <footer className="h-15 bg-background-950/80 flex justify-between px-4 items-center">
            <div id="copyright">
                &copy; {new Date().getFullYear()} n-by.me &bull; {"Licensed under MIT"} &bull; Made with <a href="https://nextjs.org">NextJS</a> &bull; <a href="https://github.com/Noobyguy775/n-by.me">Source</a>
            </div>
        </footer>
    )
}
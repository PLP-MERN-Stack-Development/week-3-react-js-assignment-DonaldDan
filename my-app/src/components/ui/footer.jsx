// src/components/Footer.jsx

import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>&copy; {new Date().getFullYear()} SAD. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="https://github.com/DonaldDan" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}


export default Footer;
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-6 border-t mt-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Yuri Kimura. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/YuriKimura01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yuri-kimura-687189286"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}


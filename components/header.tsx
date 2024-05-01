import { FrameIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { AvatarFallback, Avatar, AvatarImage } from './ui/avatar'

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4">
      <nav className="hidden flex-row items-center space-x-4 text-sm font-medium sm:flex">
        <Link href="/" className="">
          <FrameIcon className="size-6 text-foreground" />
          <span className="sr-only">Bunes</span>
        </Link>

        <Button className="text-base" variant="link" asChild>
          <Link href={'#'}>Overview</Link>
        </Button>

        <Button className="text-base" variant="link" asChild>
          <Link href={'#'}>Containers</Link>
        </Button>
      </nav>

      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/51864067?v=4" />
        <AvatarFallback>KP</AvatarFallback>
      </Avatar>
    </header>
  )
}

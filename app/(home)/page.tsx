import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { CirclePlusIcon, EllipsisIcon } from 'lucide-react'

import GradleIcon from '@/components/icons/gradle-icon'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />

      <main className="container max-w-7xl p-4">
        <div className="flex h-10 flex-row gap-2">
          <form className="h-full w-full">
            <Input
              className="h-full w-full text-base"
              placeholder="Search Projects..."
              type="search"
            />
          </form>

          <Button className="h-full text-base" variant="default">
            <CirclePlusIcon className="mr-2 size-6" />
            Add new
          </Button>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex w-full flex-col gap-1.5">
            <div className="flex flex-row">
              <Button asChild variant={'link'}>
                <Link href={'https://github.com/inpulse-vet/eval-geolocation'}>
                  <GitHubLogoIcon className="mr-1.5 size-5" />
                  inpulse-vet/eval-geolocation
                </Link>
              </Button>
            </div>

            <div className="my-0 flex w-full flex-row justify-between rounded-xl border px-4 py-3 shadow-sm">
              <div className="flex flex-row items-center space-x-2">
                <GradleIcon className="size-10" />

                <div className="flex flex-col text-sm">
                  <Button className="w-full justify-start" variant={'link'}>
                    eval-geolocation
                  </Button>
                  <Button
                    className="h-full text-muted-foreground"
                    variant={'link'}
                  >
                    eval-geolocation.bunes.com
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center text-[0.875rem] text-muted-foreground">
                <span>- cite server host and port</span>
                <span>8m ago on master</span>
              </div>
              <div className="flex items-center">
                <Button variant={'ghost'} size={'icon'}>
                  <EllipsisIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <div className="flex flex-row">
              <Button asChild variant={'link'}>
                <Link href={'https://github.com/inpulse-vet/eval-geolocation'}>
                  <GitHubLogoIcon className="mr-1.5 size-5" />
                  inpulse-vet/eval-geolocation
                </Link>
              </Button>
            </div>

            <div className="my-0 flex w-full flex-row justify-between rounded-xl border px-4 py-3 shadow-sm">
              <div className="flex flex-row items-center space-x-2">
                <GradleIcon className="size-10" />

                <div className="flex flex-col text-sm">
                  <Button className="w-full justify-start" variant={'link'}>
                    eval-geolocation
                  </Button>
                  <Button
                    className="h-full text-muted-foreground"
                    variant={'link'}
                  >
                    eval-geolocation.bunes.com
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center text-[0.875rem] text-muted-foreground">
                <span>- cite server host and port</span>
                <span>8m ago on master</span>
              </div>
              <div className="flex items-center">
                <Button variant={'ghost'} size={'icon'}>
                  <EllipsisIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <div className="flex flex-row">
              <Button asChild variant={'link'}>
                <Link href={'https://github.com/inpulse-vet/eval-geolocation'}>
                  <GitHubLogoIcon className="mr-1.5 size-5" />
                  inpulse-vet/eval-geolocation
                </Link>
              </Button>
            </div>

            <div className="my-0 flex w-full flex-row justify-between rounded-xl border px-4 py-3 shadow-sm">
              <div className="flex flex-row items-center space-x-2">
                <GradleIcon className="size-10" />

                <div className="flex flex-col text-sm">
                  <Button className="w-full justify-start" variant={'link'}>
                    eval-geolocation
                  </Button>
                  <Button
                    className="h-full text-muted-foreground"
                    variant={'link'}
                  >
                    eval-geolocation.bunes.com
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center text-[0.875rem] text-muted-foreground">
                <span>- cite server host and port</span>
                <span>8m ago on master</span>
              </div>
              <div className="flex items-center">
                <Button variant={'ghost'} size={'icon'}>
                  <EllipsisIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

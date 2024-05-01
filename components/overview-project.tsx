import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { EllipsisIcon, ExternalLinkIcon, GitBranchIcon } from 'lucide-react'

import GradleIcon from '@/components/icons/gradle-icon'
import Link from 'next/link'
import { Button } from './ui/button'

export type OverviewProjectProps = {
  name: string
  appUrl: string

  repoName: string
  repoUrl: string

  lastCommit: string
  lastCommitDate: string
  lastCommitUrl: string
  lastCommitBranch: string
}

export function OverviewProject({
  name,
  appUrl,

  repoName,
  repoUrl,

  lastCommit,
  lastCommitDate,
  lastCommitUrl,
  lastCommitBranch,
}: OverviewProjectProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <div className="flex flex-row">
        <Button asChild variant={'link'}>
          <Link href={repoUrl}>
            <GitHubLogoIcon className="mr-1.5 size-5" />
            {repoName}
          </Link>
        </Button>
      </div>

      <div className="my-0 grid grid-cols-5 flex-row rounded-xl border px-4 py-3 shadow-sm">
        <div className="flex flex-row items-center space-x-2">
          <GradleIcon className="size-10" />

          <div className="flex flex-col text-sm">
            <Button className="w-full justify-start" variant={'link'}>
              {name}
            </Button>
            <Button
              className="group h-full text-muted-foreground"
              variant={'link'}
            >
              {appUrl}
              <ExternalLinkIcon className="ml-1 hidden size-4 group-hover:block" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 text-left">
          <div className="size-2.5 rounded-full bg-yellow-200" />

          <span className="text-sm text-muted-foreground">Building...</span>
        </div>

        <div className="col-span-2 flex flex-col justify-center truncate text-left text-[0.875rem] text-muted-foreground">
          <Button
            className="justify-start text-muted-foreground"
            variant="link"
            asChild
          >
            <Link href={lastCommitUrl}>{lastCommit}</Link>
          </Button>

          <div className="flex items-center space-x-1">
            <span>{lastCommitDate} ago on</span>

            <Button className="m-0 h-auto justify-start" variant="link" asChild>
              <Link className="flex items-center" href={'#'}>
                <GitBranchIcon className="mr-0.5 size-4" />
                {lastCommitBranch}
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button variant={'ghost'} size={'icon'}>
            <EllipsisIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CirclePlusIcon } from 'lucide-react'
import { OverviewProject } from './overview-project'

export function PopulatedProjectList() {
  return (
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
        <OverviewProject
          name="portfolio"
          appUrl="portfolio.bunis.com"
          repoName="kauepalota/portfolio"
          repoUrl="https://github.com/kauepalota/portfolio"
          lastCommit="chore: change introduction description, removing the lack of knowledge"
          lastCommitBranch="main"
          lastCommitDate="1 day"
          lastCommitUrl="https://github.com/kauepalota/portfolio/commit/eb4037f686c66e514034e719ca44b35e6bede318"
        />
        <OverviewProject
          name="portfolio"
          appUrl="portfolio.bunis.com"
          repoName="kauepalota/portfolio"
          repoUrl="https://github.com/kauepalota/portfolio"
          lastCommit="feat: add card animation"
          lastCommitBranch="main"
          lastCommitDate="1 day"
          lastCommitUrl="https://github.com/kauepalota/portfolio/commit/eb4037f686c66e514034e719ca44b35e6bede318"
        />
      </div>
    </main>
  )
}

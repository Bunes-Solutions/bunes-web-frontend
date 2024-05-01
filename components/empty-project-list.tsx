import { FrownIcon } from 'lucide-react'
import { Button } from './ui/button'

export function EmptyProjectList() {
  return (
    <main className="m-4 flex flex-1 items-center justify-center rounded-lg">
      <div className="flex flex-col items-center gap-1 text-center">
        <FrownIcon className="mb-0.5 size-16" />

        <h3 className="text-2xl font-bold tracking-tight">
          There are no projects yet
        </h3>
        <p className="text-sm text-muted-foreground">
          Start deploying by importing your first project!
        </p>

        <Button className="mt-4">Import</Button>
      </div>
    </main>
  )
}

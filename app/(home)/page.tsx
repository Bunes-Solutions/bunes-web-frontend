import { EmptyProjectList } from '@/components/empty-project-list'
import { Header } from '@/components/header'
import { PopulatedProjectList } from '@/components/populated-project-list'

const projects = [{}]

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />

      {projects.length > 0 ? <PopulatedProjectList /> : <EmptyProjectList />}
    </div>
  )
}

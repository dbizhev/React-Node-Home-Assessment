import CreateServer from './create-server'
import { loadJobs } from './jobs.data'

const PORT = 3050


const ServerInstance = CreateServer()

ServerInstance.listen(PORT, async () => {
  await loadJobs()
  console.log(`Local API listening at http://localhost:${PORT}`)
})

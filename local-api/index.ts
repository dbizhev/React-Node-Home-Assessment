import CreateServer from "./create-server";
import { loadJobs } from "./jobs.data";

const PORT = 3050;

const ServerInstance = CreateServer();

// Loads job every minute
setInterval(async () => {
	await loadJobs();
}, 60000);

ServerInstance.listen(PORT, async () => {
	// load job once
	await loadJobs();
	console.log(`Local API listening at http://localhost:${PORT}`);
});

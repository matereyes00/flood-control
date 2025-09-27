export const equivalencyMilestones = [
	{
		threshold: 4000000,
		message: (spent) =>
			`That's enough to cover the lifetime earnings of ${Math.floor(spent / 4000000).toLocaleString()} average Filipinos.`,
	},
	{
		threshold: 2500000,
		message: (spent) =>
			`That's enough to build ${Math.floor(spent / 2500000).toLocaleString()} new public classrooms.`,
	},
	{
		threshold: 1750250,
		message: (spent) =>
			`That's enough to build ${Math.floor(spent / 1750250).toLocaleString()} new Barangay Health Stations.`,
	},
	{
		threshold: 3000,
		message: (spent) =>
			`That's enough to fund ${Math.floor(spent / 3000).toLocaleString()} life-saving dialysis sessions.`,
		source: "https://caro.doh.gov.ph/licensing-forms/",
	},
	{
		threshold: 12600,
		message: (spent) =>
			`That could have paid the initial licensing fees for ${Math.floor(spent / 12600).toLocaleString()} Cancer Specialty Hospitals.`,
		source: "https://caro.doh.gov.ph/licensing-forms/",
	},
	{
		threshold: 5000,
		message: (spent) =>
			`That's enough to establish and license ${Math.floor(spent / 5000).toLocaleString()} new hospital blood banks.`,
	},
	{
		threshold: 695,
		message: (spent) =>
			`This could have paid the daily wage for ${Math.floor(spent / 695).toLocaleString()} Filipino worker(s) (non-agriculture sectors) in the National Capital Region.`,
	},
	{
		threshold: 658,
		message: (spent) =>
			`This could have paid the daily wage for ${Math.floor(spent / 658).toLocaleString()} Filipino worker(s) (service, small retail, agriculture sectors) in the National Capital Region.`,
	},
	{
		threshold: 60000,
		message: (spent) =>
			`${Math.floor(spent / 60000).toLocaleString()} qualified rice farmer(s) could have benefitted from the Agri-Puhunan at Pantawid program.`,
	},
].sort((a, b) => b.threshold - a.threshold); // Sort descending to check largest first

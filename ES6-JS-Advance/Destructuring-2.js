// TOP 5 MOST-USED DESTRUCTURING PATTERNS (Production-ready examples)
// Run with: node Destructuring-2.js

// 1) Object Destructuring for API Response Handling
// Explanation: Extract only required nested fields from a complex API response
const apiResponse = {
	status: 200,
	message: "Success",
	data: {
		user: {
			id: 12,
			name: "Himanshu",
			email: "himanshu@mail.com",
			role: "admin"
		},
		token: "abc123xyz"
	}
};

const {
	data: {
		user: { id, name, email }
	}
} = apiResponse;

console.log('// 1) API response destructuring output');
console.log(id, name, email); // 12 Himanshu himanshu@mail.com


// 2) Destructuring Function Parameters (Clean & Professional)
// Explanation: Deconstruct expected properties from large objects passed to functions
function createProfile({ name, age, skills, location }) {
	// Defensive: provide defaults when appropriate inside function
	const safeSkills = Array.isArray(skills) ? skills : [];
	return `${name} (${age}) from ${location} knows ${safeSkills.join(', ')}`;
}

const userForProfile = {
	name: "Himanshu",
	age: 23,
	skills: ["JavaScript", "React", "Node"],
	location: "India"
};

console.log('\n// 2) Function parameter destructuring output');
console.log(createProfile(userForProfile));


// 3) Removing Sensitive / Unwanted Data (Security Pattern)
// Explanation: Use rest with destructuring to immutably remove sensitive fields
const userRecord = {
	id: 101,
	name: "Himanshu",
	email: "h@mail.com",
	password: "secret123",
	isAdmin: true
};

const { password, isAdmin, ...publicUser } = userRecord;

console.log('\n// 3) Sanitized user object (sensitive fields removed)');
console.log(publicUser);


// 4) Array Destructuring for Data Priority Handling
// Explanation: Take top-priority items (winner, runner-up) and gather the rest
const leaderboard = [
	{ name: "A", score: 98 },
	{ name: "B", score: 90 },
	{ name: "C", score: 85 },
	{ name: "D", score: 80 }
];

const [winner, runnerUp, ...others] = leaderboard;

console.log('\n// 4) Leaderboard priority destructuring');
console.log(winner);
console.log(runnerUp);
console.log(others);


// 5) Default Values + Renaming (Defensive Coding)
// Explanation: Provide fallbacks and rename properties when incoming data is inconsistent
const settings = {
	theme: "dark"
};

const {
	theme,
	language = "en",
	mode: appMode = "production"
} = settings;

console.log('\n// 5) Defaults and renaming');
console.log(theme, language, appMode); // dark en production


// End of file: patterns show real outputs and include comments for team handoff


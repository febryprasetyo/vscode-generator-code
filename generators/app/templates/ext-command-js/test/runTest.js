const path = require('path');

const { runTests } = require('vscode-test');

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionPath = path.resolve(__dirname, '../../');

		// The path to test runner
		// Passed to --extensionTestsPath
		const testRunnerPath = path.resolve(__dirname, './suite');

		// Download VS Code, unzip it and run the integration test
		await runTests({ extensionPath, testRunnerPath });
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();

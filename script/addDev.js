const execSync = require('child_process').execSync
const fs = require('fs')
const path = require('path')

function installDev() {
	const devDependenciesJson = path.resolve('devDependencies.json')
	const devDependencies = JSON.parse(fs.readFileSync(devDependenciesJson))
	for (const devDependencyName in devDependencies) {
		const depVersion = devDependencies[devDependencyName]
		const depInstall = `${devDependencyName}@${depVersion}`
		execSync(`yarn add ${depInstall} -D`, {
				stdio: 'inherit'
			})
	}
	execSync(`rm  ${devDependenciesJson}`)
}

function changeAppName(name) {
	const appJson = path.resolve('app.json')
	const appJS = path.resolve('./src/app.js')
	const appReigist = ""+fs.readFileSync(appJS)
	const appName = JSON.parse(fs.readFileSync(appJson)).name
	const newAppReigist = appReigist.replace(name, appName)
	fs.writeFileSync(appJS, newAppReigist)
}
changeAppName('MICRN')
installDev()
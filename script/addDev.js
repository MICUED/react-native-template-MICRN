const execSync = require('child_process').execSync
const fs = require('fs')
const path = require('path')

/**安装devDependencies
 */
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
/**改变注册应用名称
 * @param  {} name 
 */
function changeAppName(name) {
	const appJson = path.resolve('app.json')
	const appJS = path.resolve('./src/app.js')
	const appReigist = "" + fs.readFileSync(appJS)
	const appName = JSON.parse(fs.readFileSync(appJson)).name
	const newAppReigist = appReigist.replace(name, appName)
	fs.writeFileSync(appJS, newAppReigist)
}
/**添加缓存图片组件依赖
 */
function imageIntallFunc() {
	const AndroidManifestPath = path.resolve('./android/app/src/main/AndroidManifest.xml')
	const buildGradlePath =  path.resolve('./android/app/build.gradle')
	const AndroidManifest = "" + fs.readFileSync(AndroidManifestPath)
	const buildGradle =  "" + fs.readFileSync(buildGradlePath)
	const locationPermission = '<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />'
	const locationDependencies = `compile 'com.facebook.fresco:animated-base-support:0.14.1'
		compile 'com.facebook.fresco:animated-gif:0.14.1'`
	const replacementTag = '<uses-permission android:name="android.permission.INTERNET" />'
	const replacementDependenciesTag = `compile "com.facebook.react:react-native:+"  // From node_modules`
	const replacement =
	`${locationPermission}
		${replacementTag}`
	const replacementDependencies =
	`${replacementDependenciesTag}
		${locationDependencies}`
	const newAndroidManifest = AndroidManifest.replace(replacementTag, replacement)
	const newbuildGradle = buildGradle.replace(replacementDependenciesTag, replacementDependencies)
	console.log('图片增加权限===================')
	fs.writeFileSync(AndroidManifestPath, newAndroidManifest)
	fs.writeFileSync(buildGradlePath, newbuildGradle)
	execSync(`RNFB_ANDROID_PERMISSIONS=true react-native link`)
}
changeAppName('MICRN')
installDev()
imageIntallFunc()
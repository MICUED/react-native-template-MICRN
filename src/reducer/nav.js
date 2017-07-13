import { AppNavigator } from "../routerConfig.js"
export default (state, action) => {
    return AppNavigator.router.getStateForAction(action, state) || state
}
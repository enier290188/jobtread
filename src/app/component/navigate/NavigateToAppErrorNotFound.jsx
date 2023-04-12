import {SettingRoute} from '../../setting'
import {NavigateTo} from './NavigateTo'

export const NavigateToAppErrorNotFound = () => {
    return (
        <NavigateTo to={`${SettingRoute.app.error.notFound.TO}`}/>
    )
}

import { VenvResolver } from '../VenvResolver'
import {
    CMakeBasedInstrumentation,
    WrapperInfo,
} from './CMakeBasedInstrumentation'

export class DiscoPoPCMakeBasedInstrumentation extends CMakeBasedInstrumentation {
    public constructor() {
        super()
    }

    public get wrapperInfo(): WrapperInfo {
        return new DiscoPoPProfilingWrapperInfo()
    }
}

class DiscoPoPProfilingWrapperInfo implements WrapperInfo {
    public constructor() {}

    public get cmakeWrapper(): Promise<string> {
        return VenvResolver.checkExists(
            'discopop_cmake',
            'Is DiscoPoP installed?'
        ).then(() => VenvResolver.resolve('discopop_cmake'))
    }
}

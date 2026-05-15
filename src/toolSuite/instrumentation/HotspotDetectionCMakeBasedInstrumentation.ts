import { VenvResolver } from '../VenvResolver'
import {
    CMakeBasedInstrumentation,
    WrapperInfo,
} from './CMakeBasedInstrumentation'

export class HotspotDetectionCMakeBasedInstrumentation extends CMakeBasedInstrumentation {
    public constructor() {
        super()
    }

    public get wrapperInfo(): WrapperInfo {
        return new HotspotDetectionProfilingWrapperInfo()
    }
}

class HotspotDetectionProfilingWrapperInfo implements WrapperInfo {
    public constructor() {}

    public get cmakeWrapper(): Promise<string> {
        return VenvResolver.checkExists(
            'discopop_hotspot_cmake',
            'Is the Hotspot Detection tool installed?'
        ).then(() => VenvResolver.resolve('discopop_hotspot_cmake'))
    }
}

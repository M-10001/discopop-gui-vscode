import { VenvResolver } from '../VenvResolver'
import { CancelToken } from '../../utils/cancellation/CancelToken'
import { CommandExecution } from '../../utils/CommandExecution'

export class DiscoPoPExplorer {
    public constructor() {}

    public async run(
        dotDiscoPoP: string,
        cancelToken?: CancelToken,
        overrideExplorerArguments?: string,
        stdoutCallback?: (data: string) => void,
        stderrCallback?: (data: string) => void
    ): Promise<void> {
        await VenvResolver.checkExists(
            'discopop_explorer',
            'Is DiscoPoP installed?'
        )

        let command = VenvResolver.resolve('discopop_explorer')

        // ovveride options?
        if (overrideExplorerArguments) {
            command += ' ' + overrideExplorerArguments
        }

        // execute
        await CommandExecution.execute({
            command: command,
            cwd: dotDiscoPoP,
            cancelToken: cancelToken,
            throwOnNonZeroExitCode: true,
            throwOnCancellation: true,
            stdoutCallback: stdoutCallback,
            stderrCallback: stderrCallback,
        })
    }
}

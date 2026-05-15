import { VenvResolver } from '../VenvResolver'
import { CommandExecution } from '../../utils/CommandExecution'

export class DiscoPoPConfigProvider {
    public constructor() {}

    public get version(): Promise<string> {
        return VenvResolver.checkExists(
            'discopop_config_provider',
            'Is DiscoPoP installed?'
        ).then(() => {
            return CommandExecution.execute({
                command: `${VenvResolver.resolve(
                    'discopop_config_provider'
                )} --version`,
                throwOnNonZeroExitCode: true,
            }).then((result) => result.stdout)
        })
    }

    public get buildDirectory(): Promise<string> {
        return VenvResolver.checkExists(
            'discopop_config_provider',
            'Is DiscoPoP installed?'
        ).then(() => {
            return CommandExecution.execute({
                command: `${VenvResolver.resolve(
                    'discopop_config_provider'
                )} --dp-build-dir`,
                throwOnNonZeroExitCode: true,
            }).then((result) => result.stdout)
        })
    }

    public get sourceDirectory(): Promise<string> {
        return VenvResolver.checkExists(
            'discopop_config_provider',
            'Is DiscoPoP installed?'
        ).then(() => {
            return CommandExecution.execute({
                command: `${VenvResolver.resolve(
                    'discopop_config_provider'
                )} --dp-source-dir`,
                throwOnNonZeroExitCode: true,
            }).then((result) => result.stdout)
        })
    }

    public get llvmBinDirectory(): Promise<string> {
        return VenvResolver.checkExists(
            'discopop_config_provider',
            'Is DiscoPoP installed?'
        ).then(() => {
            return CommandExecution.execute({
                command: `${VenvResolver.resolve(
                    'discopop_config_provider'
                )} --llvm-bin-dir`,
                throwOnNonZeroExitCode: true,
            }).then((result) => result.stdout)
        })
    }
}

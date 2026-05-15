import * as path from 'path'
import { VsCodeSettings } from '../settings/VsCodeSettings'
import { CommandExecution } from '../utils/CommandExecution'

export class VenvResolver {
    private constructor() {
        throw new Error('VenvResolver cannot be instantiated')
    }

    private static _venvPath(): string {
        return new VsCodeSettings().pythonVenvPath
    }

    public static resolve(binaryName: string): string {
        const venvPath = VenvResolver._venvPath()
        if (venvPath) {
            return path.join(venvPath, 'bin', binaryName)
        }
        return binaryName
    }

    public static async checkExists(
        binaryName: string,
        installationHint: string
    ): Promise<void> {
        const venvPath = VenvResolver._venvPath()
        if (venvPath) {
            const fullPath = path.join(venvPath, 'bin', binaryName)
            await CommandExecution.execute({
                command: `test -f "${fullPath}"`,
                throwOnNonZeroExitCode: true,
            }).catch(() => {
                throw new Error(
                    `${binaryName} not found in venv at ${venvPath}. ${installationHint}`
                )
            })
        } else {
            await CommandExecution.commandExists(
                binaryName,
                true,
                installationHint
            )
        }
    }
}

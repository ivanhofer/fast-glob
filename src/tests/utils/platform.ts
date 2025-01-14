import * as os from 'os';

const NODE_PROCESS_VERSION_PARTS = process.versions.node.split('.');

const MAJOR_VERSION = parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
const MINOR_VERSION = parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);

const SUPPORTED_MAJOR_VERSION = 10;
const SUPPORTED_MINOR_VERSION = 10;

const IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
const IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;

/**
 * IS `true` for Node.js 10.10 and greater.
 */
export const IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;

export function isSupportReaddirWithFileTypes(): boolean {
	return IS_SUPPORT_READDIR_WITH_FILE_TYPES;
}

export function isWindows(): boolean {
	return os.platform() === 'win32';
}

export function isMacos(): boolean {
	return os.platform() === 'darwin';
}

export function isUnix(): boolean {
	return os.platform() === 'linux';
}

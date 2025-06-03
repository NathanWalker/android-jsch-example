declare module com {
	export module jcraft {
		export module jsch {
			export class JavaVersion {
				public static class: java.lang.Class<com.jcraft.jsch.JavaVersion>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class XDH extends com.jcraft.jsch.XDH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.XDH>;
					public constructor();
					public init(name: string, keylen: number): void;
					public init(param0: string, param1: number): void;
					public getSecret(param0: androidNative.Array<number>): androidNative.Array<number>;
					public getSecret(Q: androidNative.Array<number>): androidNative.Array<number>;
					public validate(u: androidNative.Array<number>): boolean;
					public validate(param0: androidNative.Array<number>): boolean;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class KeyPairGenEdDSA extends com.jcraft.jsch.KeyPairGenEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.KeyPairGenEdDSA>;
					public getPrv(): androidNative.Array<number>;
					public constructor();
					public getPub(): androidNative.Array<number>;
					public init(name: string, keylen: number): void;
					public init(param0: string, param1: number): void;
					public init(name: string, prv: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureEd25519 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureEd25519>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureEd448 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureEd448>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export abstract class SignatureEdDSA extends com.jcraft.jsch.SignatureEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureEdDSA>;
					public setPubKey(y_arr: androidNative.Array<number>): void;
					public setPrvKey(bytes: androidNative.Array<number>): void;
					public setPubKey(param0: androidNative.Array<number>): void;
					public verify(param0: androidNative.Array<number>): boolean;
					public sign(): androidNative.Array<number>;
					public setPrvKey(param0: androidNative.Array<number>): void;
					public verify(this_: androidNative.Array<number>): boolean;
					public init(): void;
					public update(param0: androidNative.Array<number>): void;
					public update(foo: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UnixDomainSocketFactory extends com.jcraft.jsch.USocketFactory {
				public static class: java.lang.Class<com.jcraft.jsch.UnixDomainSocketFactory>;
				public bind(param0: java.nio.file.Path): java.nio.channels.ServerSocketChannel;
				public connect(param0: java.nio.file.Path): java.nio.channels.SocketChannel;
				public connect(path: java.nio.file.Path): java.nio.channels.SocketChannel;
				public bind(path: java.nio.file.Path): java.nio.channels.ServerSocketChannel;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JavaVersion {
				public static class: java.lang.Class<com.jcraft.jsch.JavaVersion>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JplLogger extends com.jcraft.jsch.Logger {
				public static class: java.lang.Class<com.jcraft.jsch.JplLogger>;
				public log(sw: number, this_: string, level: java.lang.Throwable): void;
				public isEnabled(level: number): boolean;
				public log(param0: number, param1: string): void;
				public isEnabled(param0: number): boolean;
				public log(level: number, message: string): void;
				public log(level: number, message: string, cause: java.lang.Throwable): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class AgentConnector {
				public static class: java.lang.Class<com.jcraft.jsch.AgentConnector>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.AgentConnector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getName(): string;
					isAvailable(): boolean;
					query(param0: com.jcraft.jsch.Buffer): void;
				});
				public constructor();
				public isAvailable(): boolean;
				public getName(): string;
				public query(param0: com.jcraft.jsch.Buffer): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class AgentIdentity extends com.jcraft.jsch.Identity {
				public static class: java.lang.Class<com.jcraft.jsch.AgentIdentity>;
				public getAlgName(): string;
				public setPassphrase(passphrase: androidNative.Array<number>): boolean;
				public getSignature(data: androidNative.Array<number>): androidNative.Array<number>;
				public getPublicKeyBlob(): androidNative.Array<number>;
				/** @deprecated */
				public decrypt(): boolean;
				public setPassphrase(param0: androidNative.Array<number>): boolean;
				public clear(): void;
				public getSignature(data: androidNative.Array<number>, alg: string): androidNative.Array<number>;
				public getName(): string;
				public getSignature(param0: androidNative.Array<number>): androidNative.Array<number>;
				public isEncrypted(): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class AgentIdentityRepository extends com.jcraft.jsch.IdentityRepository {
				public static class: java.lang.Class<com.jcraft.jsch.AgentIdentityRepository>;
				public constructor(connector: com.jcraft.jsch.AgentConnector);
				public getStatus(): number;
				public remove(param0: androidNative.Array<number>): boolean;
				public getName(): string;
				public add(identity: androidNative.Array<number>): boolean;
				public remove(blob: androidNative.Array<number>): boolean;
				public getIdentities(): java.util.Vector<com.jcraft.jsch.Identity>;
				public add(param0: androidNative.Array<number>): boolean;
				public removeAll(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class AgentProxy {
				public static class: java.lang.Class<com.jcraft.jsch.AgentProxy>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class AgentProxyException {
				public static class: java.lang.Class<com.jcraft.jsch.AgentProxyException>;
				public constructor(message: string, e: java.lang.Throwable);
				public constructor(message: string);
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Argon2 extends com.jcraft.jsch.KDF {
				public static class: java.lang.Class<com.jcraft.jsch.Argon2>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.Argon2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: androidNative.Array<number>, param5: number, param6: number, param7: number): void;
					getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				});
				public constructor();
				public static ARGON2ID: number = 2;
				public static V13: number = 19;
				public static ARGON2I: number = 1;
				public static V10: number = 16;
				public static ARGON2D: number = 0;
				public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				public init(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: androidNative.Array<number>, param5: number, param6: number, param7: number): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class BCrypt extends com.jcraft.jsch.KDF {
				public static class: java.lang.Class<com.jcraft.jsch.BCrypt>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.BCrypt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: androidNative.Array<number>, param1: number): void;
					getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				});
				public constructor();
				public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				public init(param0: androidNative.Array<number>, param1: number): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Buffer {
				public static class: java.lang.Class<com.jcraft.jsch.Buffer>;
				public getString(): androidNative.Array<number>;
				public shift(): void;
				public putByte(foo: number): void;
				public putInt(val: number): void;
				public constructor();
				public reset(): void;
				public getByte(len: number): number;
				public getByte(foo: androidNative.Array<number>): void;
				public getInt(): number;
				public getMPIntBits(): androidNative.Array<number>;
				public putString(foo: androidNative.Array<number>, begin: number, length: number): void;
				public constructor(buffer: androidNative.Array<number>);
				public putByte(foo: androidNative.Array<number>, begin: number, length: number): void;
				public constructor(size: number);
				public putMPInt(foo: androidNative.Array<number>): void;
				public getUInt(): number;
				public getLength(): number;
				public putByte(foo: androidNative.Array<number>): void;
				public putLong(val: number): void;
				public getByte(): number;
				public getOffSet(): number;
				public getMPInt(): androidNative.Array<number>;
				public setOffSet(s: number): void;
				public putString(foo: androidNative.Array<number>): void;
				public getLong(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class Channel {
				public static class: java.lang.Class<com.jcraft.jsch.Channel>;
				public type: androidNative.Array<number>;
				public session: com.jcraft.jsch.Session;
				public setInputStream(in_: java.io.InputStream, dontclose: boolean): void;
				public getSession(): com.jcraft.jsch.Session;
				public isConnected(): boolean;
				public setOutputStream(out: java.io.OutputStream, dontclose: boolean): void;
				public connect(): void;
				public start(): void;
				public disconnect(): void;
				public setInputStream(in_: java.io.InputStream): void;
				public setExtOutputStream(out: java.io.OutputStream, dontclose: boolean): void;
				public genChannelOpenPacket(): com.jcraft.jsch.Packet;
				public getExitStatus(): number;
				public getInputStream(): java.io.InputStream;
				public getId(): number;
				public isClosed(): boolean;
				public getExtInputStream(): java.io.InputStream;
				public sendOpenFailure(packet: number): void;
				public isEOF(): boolean;
				public sendOpenConfirmation(): void;
				public sendSignal(signal: string): void;
				public getOutputStream(): java.io.OutputStream;
				public setXForwarding(foo: boolean): void;
				public setOutputStream(out: java.io.OutputStream): void;
				public sendChannelOpen(): void;
				public connect(this_: number): void;
				public setExtOutputStream(out: java.io.OutputStream): void;
			}
			export module Channel {
				export class MyPipedInputStream {
					public static class: java.lang.Class<com.jcraft.jsch.Channel.MyPipedInputStream>;
					public updateReadSide(): void;
				}
				export class PassiveInputStream extends com.jcraft.jsch.Channel.MyPipedInputStream {
					public static class: java.lang.Class<com.jcraft.jsch.Channel.PassiveInputStream>;
					public close(): void;
				}
				export class PassiveOutputStream {
					public static class: java.lang.Class<com.jcraft.jsch.Channel.PassiveOutputStream>;
					public write(b: number): void;
					public write(b: androidNative.Array<number>, off: number, len: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelAgentForwarding extends com.jcraft.jsch.Channel {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelAgentForwarding>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelDirectStreamLocal extends com.jcraft.jsch.ChannelDirectTCPIP {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelDirectStreamLocal>;
				public getSocketPath(): string;
				public genChannelOpenPacket(): com.jcraft.jsch.Packet;
				public setSocketPath(socketPath: string): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelDirectTCPIP extends com.jcraft.jsch.Channel {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelDirectTCPIP>;
				public setHost(host: string): void;
				public setInputStream(in_: java.io.InputStream, dontclose: boolean): void;
				public setOrgIPAddress(foo: string): void;
				public setOutputStream(out: java.io.OutputStream, dontclose: boolean): void;
				public connect(): void;
				public setOutputStream(out: java.io.OutputStream): void;
				public setOrgPort(foo: number): void;
				public connect(e: number): void;
				public setInputStream(in_: java.io.InputStream): void;
				public genChannelOpenPacket(): com.jcraft.jsch.Packet;
				public setPort(port: number): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelExec extends com.jcraft.jsch.ChannelSession {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelExec>;
				public start(): void;
				public setErrStream(out: java.io.OutputStream): void;
				public setErrStream(out: java.io.OutputStream, dontclose: boolean): void;
				public setCommand(command: string): void;
				public setCommand(command: androidNative.Array<number>): void;
				public constructor();
				public getErrStream(): java.io.InputStream;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelForwardedTCPIP extends com.jcraft.jsch.Channel {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelForwardedTCPIP>;
				public run(): void;
				public getRemotePort(): number;
			}
			export module ChannelForwardedTCPIP {
				export abstract class Config {
					public static class: java.lang.Class<com.jcraft.jsch.ChannelForwardedTCPIP.Config>;
				}
				export class ConfigDaemon extends com.jcraft.jsch.ChannelForwardedTCPIP.Config {
					public static class: java.lang.Class<com.jcraft.jsch.ChannelForwardedTCPIP.ConfigDaemon>;
				}
				export class ConfigLHost extends com.jcraft.jsch.ChannelForwardedTCPIP.Config {
					public static class: java.lang.Class<com.jcraft.jsch.ChannelForwardedTCPIP.ConfigLHost>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelSession extends com.jcraft.jsch.Channel {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelSession>;
				public agent_forwarding: boolean;
				public xforwading: boolean;
				public env: java.util.Hashtable<androidNative.Array<number>,androidNative.Array<number>>;
				public pty: boolean;
				public ttype: string;
				public tcol: number;
				public trow: number;
				public twp: number;
				public thp: number;
				public terminal_mode: androidNative.Array<number>;
				public setPtyType(ttype: string, col: number, row: number, wp: number, hp: number): void;
				public setPtyType(ttype: string): void;
				public setAgentForwarding(enable: boolean): void;
				/** @deprecated */
				public setEnv(env: java.util.Hashtable<androidNative.Array<number>,androidNative.Array<number>>): void;
				public setPty(enable: boolean): void;
				public setEnv(name: string, value: string): void;
				public setEnv(name: androidNative.Array<number>, value: androidNative.Array<number>): void;
				public setTerminalMode(terminal_mode: androidNative.Array<number>): void;
				public setXForwarding(enable: boolean): void;
				public sendRequests(): void;
				public setPtySize(this_: number, col: number, row: number, wp: number): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelSftp extends com.jcraft.jsch.ChannelSession {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelSftp>;
				public static SSH_FX_OK: number = 0;
				public static SSH_FX_EOF: number = 1;
				public static SSH_FX_NO_SUCH_FILE: number = 2;
				public static SSH_FX_PERMISSION_DENIED: number = 3;
				public static SSH_FX_FAILURE: number = 4;
				public static SSH_FX_BAD_MESSAGE: number = 5;
				public static SSH_FX_NO_CONNECTION: number = 6;
				public static SSH_FX_CONNECTION_LOST: number = 7;
				public static SSH_FX_OP_UNSUPPORTED: number = 8;
				public static OVERWRITE: number = 0;
				public static RESUME: number = 1;
				public static APPEND: number = 2;
				public put(src: string, dst: string, mode: number): void;
				public put(src: string, dst: string, monitor: com.jcraft.jsch.SftpProgressMonitor): void;
				public readlink(count: string): string;
				public put(i: string, attr: string, size_of_src: com.jcraft.jsch.SftpProgressMonitor, fis: number): void;
				public setMtime(j: string, v: number): void;
				public constructor();
				public stat(this_: string): com.jcraft.jsch.SftpATTRS;
				public chgrp(j: number, v: string): void;
				public lpwd(): string;
				public get(src: string, dst: java.io.OutputStream): void;
				public get(src: string, dst: java.io.OutputStream, monitor: com.jcraft.jsch.SftpProgressMonitor): void;
				public put(i: string, dstb: com.jcraft.jsch.SftpProgressMonitor, skip: number, header: number): java.io.OutputStream;
				public get(src: string, dst: string, monitor: com.jcraft.jsch.SftpProgressMonitor): void;
				public quit(): void;
				public exit(): void;
				public lcd(path: string): void;
				public get(e: string, this_: java.io.OutputStream, src: com.jcraft.jsch.SftpProgressMonitor, dst: number, monitor: number): void;
				public setBulkRequests(bulk_requests: number): void;
				public get(src: string, monitor: com.jcraft.jsch.SftpProgressMonitor): java.io.InputStream;
				public rm(type: string): void;
				public rmdir(type: string): void;
				public getUseWriteFlushWorkaround(): boolean;
				public symlink(_oldpath: string, header: string): void;
				public getServerVersion(): number;
				public chmod(j: number, v: string): void;
				public realpath(e: string): string;
				public put(vsize: java.io.InputStream, e: string, this_: com.jcraft.jsch.SftpProgressMonitor, src: number): void;
				public put(src: java.io.InputStream, dst: string, monitor: com.jcraft.jsch.SftpProgressMonitor): void;
				public get(_dstc: string, i: string, size_of_src: com.jcraft.jsch.SftpProgressMonitor, size_of_dst: number): void;
				public get(src: string, dst: string): void;
				public pwd(): string;
				public put(dst: string): java.io.OutputStream;
				public put(dst: string, monitor: com.jcraft.jsch.SftpProgressMonitor, mode: number): java.io.OutputStream;
				public hardlink(_oldpath: string, header: string): void;
				public mkdir(length: string): void;
				public setStat(v: string, vsize: com.jcraft.jsch.SftpATTRS): void;
				public chown(j: number, v: string): void;
				public get(srcb: string, attr: com.jcraft.jsch.SftpProgressMonitor, header: number): java.io.InputStream;
				public ls(path: string): java.util.Vector<com.jcraft.jsch.ChannelSftp.LsEntry>;
				public setFilenameEncoding(encoding: java.nio.charset.Charset): void;
				public start(): void;
				public put(src: string, dst: string): void;
				public disconnect(): void;
				public put(src: java.io.InputStream, dst: string, mode: number): void;
				public getBulkRequests(): number;
				public cd(attr: string): void;
				public version(): string;
				/** @deprecated */
				public get(src: string, monitor: com.jcraft.jsch.SftpProgressMonitor, mode: number): java.io.InputStream;
				public getHome(): string;
				/** @deprecated */
				public get(src: string, mode: number): java.io.InputStream;
				public setUseWriteFlushWorkaround(useWriteFlushWorkaround: boolean): void;
				public ls(attr: string, i: com.jcraft.jsch.ChannelSftp.LsEntrySelector): void;
				public statVFS(this_: string): com.jcraft.jsch.SftpStatVFS;
				public get(src: string): java.io.InputStream;
				public _put(skipped: java.io.InputStream, i: string, _ackid: com.jcraft.jsch.SftpProgressMonitor, nread: number): void;
				public lstat(this_: string): com.jcraft.jsch.SftpATTRS;
				public rename(vsize: string, header: string): void;
				public put(src: java.io.InputStream, dst: string): void;
				public put(dst: string, mode: number): java.io.OutputStream;
				/** @deprecated */
				public setFilenameEncoding(this_: string): void;
				public getExtension(key: string): string;
			}
			export module ChannelSftp {
				export class Header {
					public static class: java.lang.Class<com.jcraft.jsch.ChannelSftp.Header>;
				}
				export class LsEntry extends java.lang.Comparable<com.jcraft.jsch.ChannelSftp.LsEntry> {
					public static class: java.lang.Class<com.jcraft.jsch.ChannelSftp.LsEntry>;
					public getLongname(): string;
					public toString(): string;
					public getFilename(): string;
					public compareTo(o: com.jcraft.jsch.ChannelSftp.LsEntry): number;
					public getAttrs(): com.jcraft.jsch.SftpATTRS;
				}
				export class LsEntrySelector {
					public static class: java.lang.Class<com.jcraft.jsch.ChannelSftp.LsEntrySelector>;
					/**
					 * Constructs a new instance of the com.jcraft.jsch.ChannelSftp$LsEntrySelector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						select(param0: com.jcraft.jsch.ChannelSftp.LsEntry): number;
					});
					public constructor();
					public static CONTINUE: number = 0;
					public static BREAK: number = 1;
					public select(param0: com.jcraft.jsch.ChannelSftp.LsEntry): number;
				}
				export class RequestQueue {
					public static class: java.lang.Class<com.jcraft.jsch.ChannelSftp.RequestQueue>;
				}
				export module RequestQueue {
					export class OutOfOrderException {
						public static class: java.lang.Class<com.jcraft.jsch.ChannelSftp.RequestQueue.OutOfOrderException>;
					}
					export class Request {
						public static class: java.lang.Class<com.jcraft.jsch.ChannelSftp.RequestQueue.Request>;
					}
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelShell extends com.jcraft.jsch.ChannelSession {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelShell>;
				public start(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelSubsystem extends com.jcraft.jsch.ChannelSession {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelSubsystem>;
				public start(): void;
				public setWantReply(foo: boolean): void;
				public setErrStream(out: java.io.OutputStream): void;
				public constructor();
				public setSubsystem(foo: string): void;
				public getErrStream(): java.io.InputStream;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ChannelX11 extends com.jcraft.jsch.Channel {
				public static class: java.lang.Class<com.jcraft.jsch.ChannelX11>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Cipher {
				public static class: java.lang.Class<com.jcraft.jsch.Cipher>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.Cipher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getIVSize(): number;
					getBlockSize(): number;
					getTagSize(): number;
					init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					update(foo: number): void;
					update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					isCBC(): boolean;
					isAEAD(): boolean;
					isChaCha20(): boolean;
				});
				public constructor();
				public static ENCRYPT_MODE: number = 0;
				public static DECRYPT_MODE: number = 1;
				public getTagSize(): number;
				public update(foo: number): void;
				public isCBC(): boolean;
				public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
				public isAEAD(): boolean;
				public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
				public getIVSize(): number;
				public getBlockSize(): number;
				public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
				public isChaCha20(): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class CipherNone extends com.jcraft.jsch.Cipher {
				public static class: java.lang.Class<com.jcraft.jsch.CipherNone>;
				public init(mode: number, key: androidNative.Array<number>, iv: androidNative.Array<number>): void;
				public getTagSize(): number;
				public isCBC(): boolean;
				public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
				public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
				public getIVSize(): number;
				public getBlockSize(): number;
				public update(foo: number): void;
				public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				public isAEAD(): boolean;
				public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
				public isChaCha20(): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Compression {
				public static class: java.lang.Class<com.jcraft.jsch.Compression>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.Compression interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(type: number, level: number, session: com.jcraft.jsch.Session): void;
					end(): void;
					init(param0: number, param1: number): void;
					compress(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>): androidNative.Array<number>;
					uncompress(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>): androidNative.Array<number>;
				});
				public constructor();
				public static DEFLATER: number = 1;
				public static INFLATER: number = 0;
				public init(param0: number, param1: number): void;
				public compress(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>): androidNative.Array<number>;
				public uncompress(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>): androidNative.Array<number>;
				public init(type: number, level: number, session: com.jcraft.jsch.Session): void;
				public end(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ConfigRepository {
				public static class: java.lang.Class<com.jcraft.jsch.ConfigRepository>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.ConfigRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getConfig(param0: string): com.jcraft.jsch.ConfigRepository.Config;
					"<clinit>"(): void;
				});
				public constructor();
				public static defaultConfig: com.jcraft.jsch.ConfigRepository.Config;
				public static nullConfig: com.jcraft.jsch.ConfigRepository;
				public getConfig(param0: string): com.jcraft.jsch.ConfigRepository.Config;
			}
			export module ConfigRepository {
				export class Config {
					public static class: java.lang.Class<com.jcraft.jsch.ConfigRepository.Config>;
					/**
					 * Constructs a new instance of the com.jcraft.jsch.ConfigRepository$Config interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getHostname(): string;
						getUser(): string;
						getPort(): number;
						getValue(param0: string): string;
						getValues(param0: string): androidNative.Array<string>;
					});
					public constructor();
					public getPort(): number;
					public getValues(param0: string): androidNative.Array<string>;
					public getUser(): string;
					public getValue(param0: string): string;
					public getHostname(): string;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DH {
				public static class: java.lang.Class<com.jcraft.jsch.DH>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.DH interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(): void;
					setP(param0: androidNative.Array<number>): void;
					setG(param0: androidNative.Array<number>): void;
					getE(): androidNative.Array<number>;
					setF(param0: androidNative.Array<number>): void;
					getK(): androidNative.Array<number>;
					checkRange(): void;
				});
				public constructor();
				public setG(param0: androidNative.Array<number>): void;
				public setF(param0: androidNative.Array<number>): void;
				public getK(): androidNative.Array<number>;
				public setP(param0: androidNative.Array<number>): void;
				public checkRange(): void;
				public getE(): androidNative.Array<number>;
				public init(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DH25519 extends com.jcraft.jsch.DHXEC {
				public static class: java.lang.Class<com.jcraft.jsch.DH25519>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DH25519MLKEM768 extends com.jcraft.jsch.DHXECKEM {
				public static class: java.lang.Class<com.jcraft.jsch.DH25519MLKEM768>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DH25519SNTRUP761 extends com.jcraft.jsch.DHXECKEM {
				public static class: java.lang.Class<com.jcraft.jsch.DH25519SNTRUP761>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DH448 extends com.jcraft.jsch.DHXEC {
				public static class: java.lang.Class<com.jcraft.jsch.DH448>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHEC256 extends com.jcraft.jsch.DHECN {
				public static class: java.lang.Class<com.jcraft.jsch.DHEC256>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHEC256MLKEM768 extends com.jcraft.jsch.DHECNKEM {
				public static class: java.lang.Class<com.jcraft.jsch.DHEC256MLKEM768>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHEC384 extends com.jcraft.jsch.DHECN {
				public static class: java.lang.Class<com.jcraft.jsch.DHEC384>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHEC384MLKEM1024 extends com.jcraft.jsch.DHECNKEM {
				public static class: java.lang.Class<com.jcraft.jsch.DHEC384MLKEM1024>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHEC521 extends com.jcraft.jsch.DHECN {
				public static class: java.lang.Class<com.jcraft.jsch.DHEC521>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHECN extends com.jcraft.jsch.KeyExchange {
				public static class: java.lang.Class<com.jcraft.jsch.DHECN>;
				public sha_name: string;
				public key_size: number;
				public init(e: com.jcraft.jsch.Session, c: androidNative.Array<number>, e: androidNative.Array<number>, this_: androidNative.Array<number>, session: androidNative.Array<number>): void;
				public next(j: com.jcraft.jsch.Buffer): boolean;
				public getState(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHECNKEM extends com.jcraft.jsch.KeyExchange {
				public static class: java.lang.Class<com.jcraft.jsch.DHECNKEM>;
				public kem_name: string;
				public sha_name: string;
				public kem_pubkey_len: number;
				public kem_encap_len: number;
				public ecdh_key_size: number;
				public ecdh_key_len: number;
				public next(j: com.jcraft.jsch.Buffer): boolean;
				public getState(): number;
				public init(e: com.jcraft.jsch.Session, k: androidNative.Array<number>, c: androidNative.Array<number>, kem_public_key_C: androidNative.Array<number>, ecdh_public_key_C: androidNative.Array<number>): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG1 extends com.jcraft.jsch.DHGN {
				public static class: java.lang.Class<com.jcraft.jsch.DHG1>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG14 extends com.jcraft.jsch.DHG14N {
				public static class: java.lang.Class<com.jcraft.jsch.DHG14>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG14224 extends com.jcraft.jsch.DHG14N {
				public static class: java.lang.Class<com.jcraft.jsch.DHG14224>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG14256 extends com.jcraft.jsch.DHG14N {
				public static class: java.lang.Class<com.jcraft.jsch.DHG14256>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHG14N extends com.jcraft.jsch.DHGN {
				public static class: java.lang.Class<com.jcraft.jsch.DHG14N>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG15 extends com.jcraft.jsch.DHG15N {
				public static class: java.lang.Class<com.jcraft.jsch.DHG15>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG15256 extends com.jcraft.jsch.DHG15N {
				public static class: java.lang.Class<com.jcraft.jsch.DHG15256>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG15384 extends com.jcraft.jsch.DHG15N {
				public static class: java.lang.Class<com.jcraft.jsch.DHG15384>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHG15N extends com.jcraft.jsch.DHGN {
				public static class: java.lang.Class<com.jcraft.jsch.DHG15N>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG16 extends com.jcraft.jsch.DHG16N {
				public static class: java.lang.Class<com.jcraft.jsch.DHG16>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG16384 extends com.jcraft.jsch.DHG16N {
				public static class: java.lang.Class<com.jcraft.jsch.DHG16384>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHG16N extends com.jcraft.jsch.DHGN {
				public static class: java.lang.Class<com.jcraft.jsch.DHG16N>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG17 extends com.jcraft.jsch.DHGN {
				public static class: java.lang.Class<com.jcraft.jsch.DHG17>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHG18 extends com.jcraft.jsch.DHGN {
				public static class: java.lang.Class<com.jcraft.jsch.DHG18>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHGEX extends com.jcraft.jsch.KeyExchange {
				public static class: java.lang.Class<com.jcraft.jsch.DHGEX>;
				public hash: string;
				public init(e: com.jcraft.jsch.Session, c: androidNative.Array<number>, e: androidNative.Array<number>, this_: androidNative.Array<number>, session: androidNative.Array<number>): void;
				public getState(): number;
				public next(bits: com.jcraft.jsch.Buffer): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHGEX1 extends com.jcraft.jsch.DHGEX {
				public static class: java.lang.Class<com.jcraft.jsch.DHGEX1>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHGEX224 extends com.jcraft.jsch.DHGEX {
				public static class: java.lang.Class<com.jcraft.jsch.DHGEX224>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHGEX256 extends com.jcraft.jsch.DHGEX {
				public static class: java.lang.Class<com.jcraft.jsch.DHGEX256>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHGEX384 extends com.jcraft.jsch.DHGEX {
				public static class: java.lang.Class<com.jcraft.jsch.DHGEX384>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class DHGEX512 extends com.jcraft.jsch.DHGEX {
				public static class: java.lang.Class<com.jcraft.jsch.DHGEX512>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHGN extends com.jcraft.jsch.KeyExchange {
				public static class: java.lang.Class<com.jcraft.jsch.DHGN>;
				public init(e: com.jcraft.jsch.Session, c: androidNative.Array<number>, e: androidNative.Array<number>, this_: androidNative.Array<number>, session: androidNative.Array<number>): void;
				public next(j: com.jcraft.jsch.Buffer): boolean;
				public getState(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHXEC extends com.jcraft.jsch.KeyExchange {
				public static class: java.lang.Class<com.jcraft.jsch.DHXEC>;
				public sha_name: string;
				public curve_name: string;
				public key_len: number;
				public init(e: com.jcraft.jsch.Session, c: androidNative.Array<number>, e: androidNative.Array<number>, this_: androidNative.Array<number>, session: androidNative.Array<number>): void;
				public next(j: com.jcraft.jsch.Buffer): boolean;
				public getState(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class DHXECKEM extends com.jcraft.jsch.KeyExchange {
				public static class: java.lang.Class<com.jcraft.jsch.DHXECKEM>;
				public kem_name: string;
				public sha_name: string;
				public curve_name: string;
				public kem_pubkey_len: number;
				public kem_encap_len: number;
				public xec_key_len: number;
				public init(e: com.jcraft.jsch.Session, k: androidNative.Array<number>, c: androidNative.Array<number>, kem_public_key_C: androidNative.Array<number>, xec_public_key_C: androidNative.Array<number>): void;
				public next(j: com.jcraft.jsch.Buffer): boolean;
				public getState(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ECDH {
				public static class: java.lang.Class<com.jcraft.jsch.ECDH>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.ECDH interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: number): void;
					getSecret(param0: androidNative.Array<number>, param1: androidNative.Array<number>): androidNative.Array<number>;
					getQ(): androidNative.Array<number>;
					validate(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean;
				});
				public constructor();
				public getQ(): androidNative.Array<number>;
				public getSecret(param0: androidNative.Array<number>, param1: androidNative.Array<number>): androidNative.Array<number>;
				public init(param0: number): void;
				public validate(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ForwardedTCPIPDaemon {
				public static class: java.lang.Class<com.jcraft.jsch.ForwardedTCPIPDaemon>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.ForwardedTCPIPDaemon interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setChannel(param0: com.jcraft.jsch.ChannelForwardedTCPIP, param1: java.io.InputStream, param2: java.io.OutputStream): void;
					setArg(param0: androidNative.Array<any>): void;
				});
				public constructor();
				public setArg(param0: androidNative.Array<any>): void;
				public setChannel(param0: com.jcraft.jsch.ChannelForwardedTCPIP, param1: java.io.InputStream, param2: java.io.OutputStream): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class GSSContext {
				public static class: java.lang.Class<com.jcraft.jsch.GSSContext>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.GSSContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					create(param0: string, param1: string): void;
					isEstablished(): boolean;
					init(param0: androidNative.Array<number>, param1: number, param2: number): androidNative.Array<number>;
					getMIC(param0: androidNative.Array<number>, param1: number, param2: number): androidNative.Array<number>;
					dispose(): void;
				});
				public constructor();
				public init(param0: androidNative.Array<number>, param1: number, param2: number): androidNative.Array<number>;
				public getMIC(param0: androidNative.Array<number>, param1: number, param2: number): androidNative.Array<number>;
				public dispose(): void;
				public create(param0: string, param1: string): void;
				public isEstablished(): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class HASH {
				public static class: java.lang.Class<com.jcraft.jsch.HASH>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.HASH interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(): void;
					getBlockSize(): number;
					update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					digest(): androidNative.Array<number>;
					name(): string;
				});
				public constructor();
				public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
				public name(): string;
				public digest(): androidNative.Array<number>;
				public init(): void;
				public getBlockSize(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class HostKey {
				public static class: java.lang.Class<com.jcraft.jsch.HostKey>;
				public static UNKNOWN: number = -1;
				public static GUESS: number = 0;
				public static SSHDSS: number = 1;
				public static SSHRSA: number = 2;
				public static ECDSA256: number = 3;
				public static ECDSA384: number = 4;
				public static ECDSA521: number = 5;
				public static ED25519: number = 6;
				public static ED448: number = 7;
				public marker: string;
				public host: string;
				public type: number;
				public key: androidNative.Array<number>;
				public comment: string;
				public constructor(marker: string, host: string, type: number, key: androidNative.Array<number>, comment: string);
				public getType(): string;
				public static name2type(i: string): number;
				public constructor(host: string, type: number, key: androidNative.Array<number>);
				public getHost(): string;
				public getFingerPrint(c: com.jcraft.jsch.JSch): string;
				public constructor(host: string, key: androidNative.Array<number>);
				public constructor(host: string, type: number, key: androidNative.Array<number>, comment: string);
				public getMarker(): string;
				public getKey(): string;
				public getComment(): string;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class HostKeyRepository {
				public static class: java.lang.Class<com.jcraft.jsch.HostKeyRepository>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.HostKeyRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					check(param0: string, param1: androidNative.Array<number>): number;
					add(param0: com.jcraft.jsch.HostKey, param1: com.jcraft.jsch.UserInfo): void;
					remove(param0: string, param1: string): void;
					remove(param0: string, param1: string, param2: androidNative.Array<number>): void;
					getKnownHostsRepositoryID(): string;
					getHostKey(): androidNative.Array<com.jcraft.jsch.HostKey>;
					getHostKey(param0: string, param1: string): androidNative.Array<com.jcraft.jsch.HostKey>;
				});
				public constructor();
				public static OK: number = 0;
				public static NOT_INCLUDED: number = 1;
				public static CHANGED: number = 2;
				public remove(param0: string, param1: string): void;
				public getHostKey(param0: string, param1: string): androidNative.Array<com.jcraft.jsch.HostKey>;
				public getHostKey(): androidNative.Array<com.jcraft.jsch.HostKey>;
				public remove(param0: string, param1: string, param2: androidNative.Array<number>): void;
				public check(param0: string, param1: androidNative.Array<number>): number;
				public add(param0: com.jcraft.jsch.HostKey, param1: com.jcraft.jsch.UserInfo): void;
				public getKnownHostsRepositoryID(): string;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class IO {
				public static class: java.lang.Class<com.jcraft.jsch.IO>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Identity {
				public static class: java.lang.Class<com.jcraft.jsch.Identity>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.Identity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setPassphrase(param0: androidNative.Array<number>): boolean;
					getPublicKeyBlob(): androidNative.Array<number>;
					getSignature(param0: androidNative.Array<number>): androidNative.Array<number>;
					getSignature(data: androidNative.Array<number>, alg: string): androidNative.Array<number>;
					decrypt(): boolean;
					getAlgName(): string;
					getName(): string;
					isEncrypted(): boolean;
					clear(): void;
				});
				public constructor();
				public getAlgName(): string;
				public getPublicKeyBlob(): androidNative.Array<number>;
				/** @deprecated */
				public decrypt(): boolean;
				public setPassphrase(param0: androidNative.Array<number>): boolean;
				public clear(): void;
				public getSignature(data: androidNative.Array<number>, alg: string): androidNative.Array<number>;
				public getName(): string;
				public getSignature(param0: androidNative.Array<number>): androidNative.Array<number>;
				public isEncrypted(): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class IdentityFile extends com.jcraft.jsch.Identity {
				public static class: java.lang.Class<com.jcraft.jsch.IdentityFile>;
				public getAlgName(): string;
				public setPassphrase(passphrase: androidNative.Array<number>): boolean;
				public getSignature(data: androidNative.Array<number>): androidNative.Array<number>;
				public getPublicKeyBlob(): androidNative.Array<number>;
				/** @deprecated */
				public decrypt(): boolean;
				public setPassphrase(param0: androidNative.Array<number>): boolean;
				public clear(): void;
				public getSignature(data: androidNative.Array<number>, alg: string): androidNative.Array<number>;
				public getName(): string;
				public getKeyPair(): com.jcraft.jsch.KeyPair;
				public getSignature(param0: androidNative.Array<number>): androidNative.Array<number>;
				public isEncrypted(): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class IdentityRepository {
				public static class: java.lang.Class<com.jcraft.jsch.IdentityRepository>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.IdentityRepository interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getName(): string;
					getStatus(): number;
					getIdentities(): java.util.Vector<com.jcraft.jsch.Identity>;
					add(param0: androidNative.Array<number>): boolean;
					remove(param0: androidNative.Array<number>): boolean;
					removeAll(): void;
				});
				public constructor();
				public static UNAVAILABLE: number = 0;
				public static NOTRUNNING: number = 1;
				public static RUNNING: number = 2;
				public getStatus(): number;
				public remove(param0: androidNative.Array<number>): boolean;
				public getName(): string;
				public getIdentities(): java.util.Vector<com.jcraft.jsch.Identity>;
				public add(param0: androidNative.Array<number>): boolean;
				public removeAll(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class IdentityRepositoryWrapper extends com.jcraft.jsch.IdentityRepository {
				public static class: java.lang.Class<com.jcraft.jsch.IdentityRepositoryWrapper>;
				public getStatus(): number;
				public remove(param0: androidNative.Array<number>): boolean;
				public getName(): string;
				public add(identity: androidNative.Array<number>): boolean;
				public remove(blob: androidNative.Array<number>): boolean;
				public getIdentities(): java.util.Vector<com.jcraft.jsch.Identity>;
				public add(param0: androidNative.Array<number>): boolean;
				public removeAll(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSch {
				public static class: java.lang.Class<com.jcraft.jsch.JSch>;
				public static VERSION: string;
				public static getConfig(key: string): string;
				/** @deprecated */
				public removeIdentity(i: string): void;
				public getInstanceLogger(): com.jcraft.jsch.Logger;
				public addIdentity(prvkey: string, passphrase: androidNative.Array<number>): void;
				public addIdentity(prvkey: string, pubkey: string, passphrase: androidNative.Array<number>): void;
				public static getLogger(): com.jcraft.jsch.Logger;
				public getIdentityRepository(): com.jcraft.jsch.IdentityRepository;
				public addIdentity(prvkey: string, passphrase: string): void;
				public getConfigRepository(): com.jcraft.jsch.ConfigRepository;
				public constructor();
				public static setLogger(logger: com.jcraft.jsch.Logger): void;
				public getHostKeyRepository(): com.jcraft.jsch.HostKeyRepository;
				public getSession(username: string, host: string): com.jcraft.jsch.Session;
				public setHostKeyRepository(hkrepo: com.jcraft.jsch.HostKeyRepository): void;
				public getSession(host: string): com.jcraft.jsch.Session;
				public setKnownHosts(stream: java.io.InputStream): void;
				public static setConfig(newkey: java.util.Hashtable<string,string>): void;
				public removeSession(session: com.jcraft.jsch.Session): boolean;
				public removeIdentity(identity: com.jcraft.jsch.Identity): void;
				public setConfigRepository(configRepository: com.jcraft.jsch.ConfigRepository): void;
				public addIdentity(this_: com.jcraft.jsch.Identity, identity: androidNative.Array<number>): void;
				public addSession(session: com.jcraft.jsch.Session): void;
				public getSession(username: string, host: string, port: number): com.jcraft.jsch.Session;
				public setIdentityRepository(identityRepository: com.jcraft.jsch.IdentityRepository): void;
				public removeAllIdentity(): void;
				public setInstanceLogger(logger: com.jcraft.jsch.Logger): void;
				public getIdentityNames(): java.util.Vector<string>;
				public addIdentity(name: string, prvkey: androidNative.Array<number>, pubkey: androidNative.Array<number>, passphrase: androidNative.Array<number>): void;
				public static setConfig(key: string, value: string): void;
				public setKnownHosts(filename: string): void;
				public addIdentity(prvkey: string): void;
			}
			export module JSch {
				export class InstanceLogger {
					public static class: java.lang.Class<com.jcraft.jsch.JSch.InstanceLogger>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchAlgoNegoFailException extends com.jcraft.jsch.JSchException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchAlgoNegoFailException>;
				public getServerProposal(): string;
				public getJSchProposal(): string;
				public getAlgorithmName(): string;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchAuthCancelException extends com.jcraft.jsch.JSchException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchAuthCancelException>;
				public getMethod(): string;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchChangedHostKeyException extends com.jcraft.jsch.JSchHostKeyException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchChangedHostKeyException>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchException>;
				public constructor(s: string);
				public constructor(s: string, e: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class JSchHostKeyException extends com.jcraft.jsch.JSchException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchHostKeyException>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchPartialAuthException extends com.jcraft.jsch.JSchException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchPartialAuthException>;
				public constructor(s: string);
				public constructor(s: string, e: java.lang.Throwable);
				public getMethods(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchProxyException extends com.jcraft.jsch.JSchException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchProxyException>;
				public constructor(s: string);
				public constructor(s: string, e: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchRevokedHostKeyException extends com.jcraft.jsch.JSchHostKeyException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchRevokedHostKeyException>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchSessionDisconnectException extends com.jcraft.jsch.JSchException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchSessionDisconnectException>;
				public getReasonCode(): number;
				public getDescription(): string;
				public getLanguageTag(): string;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchStrictKexException extends com.jcraft.jsch.JSchException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchStrictKexException>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JSchUnknownHostKeyException extends com.jcraft.jsch.JSchHostKeyException {
				public static class: java.lang.Class<com.jcraft.jsch.JSchUnknownHostKeyException>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JUnixSocketFactory extends com.jcraft.jsch.USocketFactory {
				public static class: java.lang.Class<com.jcraft.jsch.JUnixSocketFactory>;
				public bind(param0: java.nio.file.Path): java.nio.channels.ServerSocketChannel;
				public connect(param0: java.nio.file.Path): java.nio.channels.SocketChannel;
				public connect(path: java.nio.file.Path): java.nio.channels.SocketChannel;
				public bind(path: java.nio.file.Path): java.nio.channels.ServerSocketChannel;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JavaVersion {
				public static class: java.lang.Class<com.jcraft.jsch.JavaVersion>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JplLogger extends com.jcraft.jsch.Logger {
				public static class: java.lang.Class<com.jcraft.jsch.JplLogger>;
				public log(sw: number, this_: string, level: java.lang.Throwable): void;
				public isEnabled(level: number): boolean;
				public log(param0: number, param1: string): void;
				public isEnabled(param0: number): boolean;
				public log(level: number, message: string): void;
				public log(level: number, message: string, cause: java.lang.Throwable): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class JulLogger extends com.jcraft.jsch.Logger {
				public static class: java.lang.Class<com.jcraft.jsch.JulLogger>;
				public log(sw: number, this_: string, level: java.lang.Throwable): void;
				public isEnabled(level: number): boolean;
				public log(param0: number, param1: string): void;
				public isEnabled(param0: number): boolean;
				public log(level: number, message: string): void;
				public log(level: number, message: string, cause: java.lang.Throwable): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KDF {
				public static class: java.lang.Class<com.jcraft.jsch.KDF>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.KDF interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				});
				public constructor();
				public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KEM {
				public static class: java.lang.Class<com.jcraft.jsch.KEM>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.KEM interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(): void;
					getPublicKey(): androidNative.Array<number>;
					decapsulate(param0: androidNative.Array<number>): androidNative.Array<number>;
				});
				public constructor();
				public getPublicKey(): androidNative.Array<number>;
				public decapsulate(param0: androidNative.Array<number>): androidNative.Array<number>;
				public init(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class KeyExchange {
				public static class: java.lang.Class<com.jcraft.jsch.KeyExchange>;
				public static STATE_END: number = 0;
				public session: com.jcraft.jsch.Session;
				public sha: com.jcraft.jsch.HASH;
				public K: androidNative.Array<number>;
				public H: androidNative.Array<number>;
				public K_S: androidNative.Array<number>;
				public RSA: number = 0;
				public DSS: number = 1;
				public ECDSA: number = 2;
				public EDDSA: number = 3;
				public static guess(i: com.jcraft.jsch.Session, i: androidNative.Array<number>, algorithm: androidNative.Array<number>): androidNative.Array<string>;
				public encodeAsString(raw: androidNative.Array<number>): androidNative.Array<number>;
				public init(param0: com.jcraft.jsch.Session, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: androidNative.Array<number>, param4: androidNative.Array<number>): void;
				public getState(): number;
				public encodeAsMPInt(raw: androidNative.Array<number>): androidNative.Array<number>;
				public next(param0: com.jcraft.jsch.Buffer): boolean;
				public getKeyType(): string;
				public getKeyAlgorithName(): string;
				public constructor();
				public getFingerPrint(): string;
				public normalize(i: androidNative.Array<number>): androidNative.Array<number>;
				public verify(e: string, tmp: androidNative.Array<number>, ee: number, n: androidNative.Array<number>): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class KeyPair {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPair>;
				public static DEFERRED: number = -1;
				public static ERROR: number = 0;
				public static DSA: number = 1;
				public static RSA: number = 2;
				public static ECDSA: number = 3;
				public static UNKNOWN: number = 4;
				public static ED25519: number = 5;
				public static ED448: number = 6;
				public publicKeyComment: string;
				public cipher: com.jcraft.jsch.Cipher;
				public encrypted: boolean;
				public data: androidNative.Array<number>;
				/** @deprecated */
				public setPassphrase(passphrase: string): void;
				public getPublicKeyComment(): string;
				public static load(jsch: com.jcraft.jsch.JSch, prvkey: androidNative.Array<number>, pubkey: androidNative.Array<number>): com.jcraft.jsch.KeyPair;
				public getVerifier(param0: string): com.jcraft.jsch.Signature;
				public writePublicKey(this_: java.io.OutputStream, out: string): void;
				public finalize(): void;
				public getSignature(param0: androidNative.Array<number>): androidNative.Array<number>;
				public writePrivateKey(name: string): void;
				public decrypt(_passphrase: androidNative.Array<number>): boolean;
				public writePrivateKey(this_: string, name: androidNative.Array<number>): void;
				public writeSECSHPublicKey(index: java.io.OutputStream, e: string): void;
				public decrypt(_passphrase: string): boolean;
				public static genKeyPair(jsch: com.jcraft.jsch.JSch, type: number, key_size: number): com.jcraft.jsch.KeyPair;
				public static load(jsch: com.jcraft.jsch.JSch, prvkey: string): com.jcraft.jsch.KeyPair;
				public getKeyTypeString(): string;
				public writePublicKey(this_: string, name: string): void;
				public getVerifier(): com.jcraft.jsch.Signature;
				public static genKeyPair(jsch: com.jcraft.jsch.JSch, type: number): com.jcraft.jsch.KeyPair;
				public setPublicKeyComment(publicKeyComment: string): void;
				public writeSECSHPublicKey(this_: string, name: string): void;
				public getSignature(param0: androidNative.Array<number>, param1: string): androidNative.Array<number>;
				public writePrivateKey(i: java.io.OutputStream, e: androidNative.Array<number>): void;
				public getPublicKeyBlob(): androidNative.Array<number>;
				public dispose(): void;
				public static load(jsch: com.jcraft.jsch.JSch, prvfile: string, pubfile: string): com.jcraft.jsch.KeyPair;
				public writePrivateKey(out: java.io.OutputStream): void;
				/** @deprecated */
				public setPassphrase(passphrase: androidNative.Array<number>): void;
				public getKeySize(): number;
				public forSSHAgent(): androidNative.Array<number>;
				public isEncrypted(): boolean;
				public getKeyType(): number;
				public getFingerPrint(): string;
			}
			export module KeyPair {
				export class ASN1 {
					public static class: java.lang.Class<com.jcraft.jsch.KeyPair.ASN1>;
				}
				export class ASN1Exception {
					public static class: java.lang.Class<com.jcraft.jsch.KeyPair.ASN1Exception>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairDSA extends com.jcraft.jsch.KeyPair {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairDSA>;
				public getSignature(param0: androidNative.Array<number>, param1: string): androidNative.Array<number>;
				public getVerifier(alg: string): com.jcraft.jsch.Signature;
				public getVerifier(param0: string): com.jcraft.jsch.Signature;
				public getPublicKeyBlob(): androidNative.Array<number>;
				public getVerifier(): com.jcraft.jsch.Signature;
				public dispose(): void;
				public getSignature(data: androidNative.Array<number>, alg: string): androidNative.Array<number>;
				public getSignature(dsa: androidNative.Array<number>): androidNative.Array<number>;
				public getKeySize(): number;
				public forSSHAgent(): androidNative.Array<number>;
				public getKeyType(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairECDSA extends com.jcraft.jsch.KeyPair {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairECDSA>;
				public getSignature(param0: androidNative.Array<number>, param1: string): androidNative.Array<number>;
				public getVerifier(alg: string): com.jcraft.jsch.Signature;
				public getVerifier(param0: string): com.jcraft.jsch.Signature;
				public getPublicKeyBlob(): androidNative.Array<number>;
				public getSignature(data: androidNative.Array<number>, al: string): androidNative.Array<number>;
				public getVerifier(): com.jcraft.jsch.Signature;
				public dispose(): void;
				public getSignature(ecdsa: androidNative.Array<number>): androidNative.Array<number>;
				public getKeySize(): number;
				public forSSHAgent(): androidNative.Array<number>;
				public getKeyType(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairEd25519 extends com.jcraft.jsch.KeyPairEdDSA {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairEd25519>;
				public getKeySize(): number;
				public getKeyType(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairEd448 extends com.jcraft.jsch.KeyPairEdDSA {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairEd448>;
				public getKeySize(): number;
				public getKeyType(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class KeyPairEdDSA extends com.jcraft.jsch.KeyPair {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairEdDSA>;
				public getSignature(param0: androidNative.Array<number>, param1: string): androidNative.Array<number>;
				public getVerifier(c: string): com.jcraft.jsch.Signature;
				public getSignature(data: androidNative.Array<number>): androidNative.Array<number>;
				public getVerifier(param0: string): com.jcraft.jsch.Signature;
				public getPublicKeyBlob(): androidNative.Array<number>;
				public getVerifier(): com.jcraft.jsch.Signature;
				public getSignature(eddsa: androidNative.Array<number>, sig: string): androidNative.Array<number>;
				public dispose(): void;
				public forSSHAgent(): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairGenDSA {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairGenDSA>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.KeyPairGenDSA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: number): void;
					getX(): androidNative.Array<number>;
					getY(): androidNative.Array<number>;
					getP(): androidNative.Array<number>;
					getQ(): androidNative.Array<number>;
					getG(): androidNative.Array<number>;
				});
				public constructor();
				public getG(): androidNative.Array<number>;
				public getX(): androidNative.Array<number>;
				public getQ(): androidNative.Array<number>;
				public init(param0: number): void;
				public getY(): androidNative.Array<number>;
				public getP(): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairGenECDSA {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairGenECDSA>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.KeyPairGenECDSA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: number): void;
					getD(): androidNative.Array<number>;
					getR(): androidNative.Array<number>;
					getS(): androidNative.Array<number>;
				});
				public constructor();
				public getS(): androidNative.Array<number>;
				public getD(): androidNative.Array<number>;
				public init(param0: number): void;
				public getR(): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairGenEdDSA {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairGenEdDSA>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.KeyPairGenEdDSA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: string, param1: number): void;
					getPub(): androidNative.Array<number>;
					getPrv(): androidNative.Array<number>;
					init(name: string, prv: androidNative.Array<number>): void;
				});
				public constructor();
				public getPrv(): androidNative.Array<number>;
				public init(param0: string, param1: number): void;
				public getPub(): androidNative.Array<number>;
				public init(name: string, prv: androidNative.Array<number>): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairGenRSA {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairGenRSA>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.KeyPairGenRSA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: number): void;
					getD(): androidNative.Array<number>;
					getE(): androidNative.Array<number>;
					getN(): androidNative.Array<number>;
					getC(): androidNative.Array<number>;
					getEP(): androidNative.Array<number>;
					getEQ(): androidNative.Array<number>;
					getP(): androidNative.Array<number>;
					getQ(): androidNative.Array<number>;
				});
				public constructor();
				public getN(): androidNative.Array<number>;
				public getQ(): androidNative.Array<number>;
				public getD(): androidNative.Array<number>;
				public getEP(): androidNative.Array<number>;
				public init(param0: number): void;
				public getE(): androidNative.Array<number>;
				public getEQ(): androidNative.Array<number>;
				public getC(): androidNative.Array<number>;
				public getP(): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairPKCS8 extends com.jcraft.jsch.KeyPair {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairPKCS8>;
				public getSignature(param0: androidNative.Array<number>, param1: string): androidNative.Array<number>;
				public getVerifier(alg: string): com.jcraft.jsch.Signature;
				public getSignature(data: androidNative.Array<number>): androidNative.Array<number>;
				public getVerifier(param0: string): com.jcraft.jsch.Signature;
				public decrypt(_passphrase: string): boolean;
				public getPublicKeyBlob(): androidNative.Array<number>;
				public getVerifier(): com.jcraft.jsch.Signature;
				public getSignature(data: androidNative.Array<number>, alg: string): androidNative.Array<number>;
				public decrypt(prf: androidNative.Array<number>): boolean;
				public getKeySize(): number;
				public forSSHAgent(): androidNative.Array<number>;
				public getKeyType(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KeyPairRSA extends com.jcraft.jsch.KeyPair {
				public static class: java.lang.Class<com.jcraft.jsch.KeyPairRSA>;
				public getSignature(rsa: androidNative.Array<number>, sig: string): androidNative.Array<number>;
				public getSignature(param0: androidNative.Array<number>, param1: string): androidNative.Array<number>;
				public getVerifier(c: string): com.jcraft.jsch.Signature;
				public getSignature(data: androidNative.Array<number>): androidNative.Array<number>;
				public getVerifier(param0: string): com.jcraft.jsch.Signature;
				public getPublicKeyBlob(): androidNative.Array<number>;
				public getVerifier(): com.jcraft.jsch.Signature;
				public dispose(): void;
				public getKeySize(): number;
				public forSSHAgent(): androidNative.Array<number>;
				public getKeyType(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class KnownHosts extends com.jcraft.jsch.HostKeyRepository {
				public static class: java.lang.Class<com.jcraft.jsch.KnownHosts>;
				public remove(param0: string, param1: string): void;
				public add(this_: com.jcraft.jsch.HostKey, hostkey: com.jcraft.jsch.UserInfo): void;
				public getHostKey(i: string, i: string): androidNative.Array<com.jcraft.jsch.HostKey>;
				public remove(hk: string, i: string, this_: androidNative.Array<number>): void;
				public remove(host: string, type: string): void;
				public getHostKey(param0: string, param1: string): androidNative.Array<com.jcraft.jsch.HostKey>;
				public check(_hk: string, i: androidNative.Array<number>): number;
				public getHostKey(): androidNative.Array<com.jcraft.jsch.HostKey>;
				public remove(param0: string, param1: string, param2: androidNative.Array<number>): void;
				public getKnownHostsRepositoryID(): string;
				public check(param0: string, param1: androidNative.Array<number>): number;
				public add(param0: com.jcraft.jsch.HostKey, param1: com.jcraft.jsch.UserInfo): void;
			}
			export module KnownHosts {
				export class HashedHostKey extends com.jcraft.jsch.HostKey {
					public static class: java.lang.Class<com.jcraft.jsch.KnownHosts.HashedHostKey>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class LocalIdentityRepository extends com.jcraft.jsch.IdentityRepository {
				public static class: java.lang.Class<com.jcraft.jsch.LocalIdentityRepository>;
				public getStatus(): number;
				public remove(param0: androidNative.Array<number>): boolean;
				public getName(): string;
				public add(i: com.jcraft.jsch.Identity): void;
				public remove(_blob: androidNative.Array<number>): boolean;
				public add(e: androidNative.Array<number>): boolean;
				public getIdentities(): java.util.Vector<com.jcraft.jsch.Identity>;
				public add(param0: androidNative.Array<number>): boolean;
				public removeAll(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Log4j2Logger extends com.jcraft.jsch.Logger {
				public static class: java.lang.Class<com.jcraft.jsch.Log4j2Logger>;
				public log(sw: number, this_: string, level: java.lang.Throwable): void;
				public isEnabled(level: number): boolean;
				public log(param0: number, param1: string): void;
				public isEnabled(param0: number): boolean;
				public log(level: number, message: string): void;
				public log(level: number, message: string, cause: java.lang.Throwable): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Logger {
				public static class: java.lang.Class<com.jcraft.jsch.Logger>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isEnabled(param0: number): boolean;
					log(param0: number, param1: string): void;
					log(sw: number, this_: string, level: java.lang.Throwable): void;
				});
				public constructor();
				public static ERROR: number = 3;
				public static INFO: number = 1;
				public static DEBUG: number = 0;
				public static FATAL: number = 4;
				public static WARN: number = 2;
				public log(sw: number, this_: string, level: java.lang.Throwable): void;
				public log(param0: number, param1: string): void;
				public isEnabled(param0: number): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class MAC {
				public static class: java.lang.Class<com.jcraft.jsch.MAC>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.MAC interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getName(): string;
					getBlockSize(): number;
					init(param0: androidNative.Array<number>): void;
					update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					update(param0: number): void;
					doFinal(param0: androidNative.Array<number>, param1: number): void;
					isEtM(): boolean;
				});
				public constructor();
				public doFinal(param0: androidNative.Array<number>, param1: number): void;
				public init(param0: androidNative.Array<number>): void;
				public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
				public isEtM(): boolean;
				public getName(): string;
				public update(param0: number): void;
				public getBlockSize(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class OpenSSHConfig extends com.jcraft.jsch.ConfigRepository {
				public static class: java.lang.Class<com.jcraft.jsch.OpenSSHConfig>;
				public getConfig(host: string): com.jcraft.jsch.ConfigRepository.Config;
				public static parse(br: string): com.jcraft.jsch.OpenSSHConfig;
				public getConfig(param0: string): com.jcraft.jsch.ConfigRepository.Config;
				public static parseFile(br: string): com.jcraft.jsch.OpenSSHConfig;
			}
			export module OpenSSHConfig {
				export class MyConfig extends com.jcraft.jsch.ConfigRepository.Config {
					public static class: java.lang.Class<com.jcraft.jsch.OpenSSHConfig.MyConfig>;
					public getPort(): number;
					public getValues(key: string): androidNative.Array<string>;
					public getValue(this_: string): string;
					public getValues(param0: string): androidNative.Array<string>;
					public getUser(): string;
					public getValue(param0: string): string;
					public getHostname(): string;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class PBKDF {
				public static class: java.lang.Class<com.jcraft.jsch.PBKDF>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.PBKDF interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: number, param3: number): androidNative.Array<number>;
				});
				public constructor();
				public getKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: number, param3: number): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class PBKDF2 extends com.jcraft.jsch.KDF {
				public static class: java.lang.Class<com.jcraft.jsch.PBKDF2>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.PBKDF2 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: androidNative.Array<number>, param1: number): void;
					getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				});
				public constructor();
				public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				public init(param0: androidNative.Array<number>, param1: number): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Packet {
				public static class: java.lang.Class<com.jcraft.jsch.Packet>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class PageantConnector extends com.jcraft.jsch.AgentConnector {
				public static class: java.lang.Class<com.jcraft.jsch.PageantConnector>;
				public isAvailable(): boolean;
				public getName(): string;
				public query(psa: com.jcraft.jsch.Buffer): void;
				public query(param0: com.jcraft.jsch.Buffer): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class PortWatcher {
				public static class: java.lang.Class<com.jcraft.jsch.PortWatcher>;
				public static addSocket(session: com.jcraft.jsch.Session, bindAddress: string, lport: number, socketPath: string, ssf: com.jcraft.jsch.ServerSocketFactory): com.jcraft.jsch.PortWatcher;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Proxy {
				public static class: java.lang.Class<com.jcraft.jsch.Proxy>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.Proxy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connect(param0: com.jcraft.jsch.SocketFactory, param1: string, param2: number, param3: number): void;
					getInputStream(): java.io.InputStream;
					getOutputStream(): java.io.OutputStream;
					getSocket(): java.net.Socket;
					close(): void;
				});
				public constructor();
				public close(): void;
				public getSocket(): java.net.Socket;
				public getInputStream(): java.io.InputStream;
				public connect(param0: com.jcraft.jsch.SocketFactory, param1: string, param2: number, param3: number): void;
				public getOutputStream(): java.io.OutputStream;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ProxyHTTP extends com.jcraft.jsch.Proxy {
				public static class: java.lang.Class<com.jcraft.jsch.ProxyHTTP>;
				public constructor(proxy_host: string);
				public setUserPasswd(user: string, passwd: string): void;
				public close(): void;
				public connect(bar: com.jcraft.jsch.SocketFactory, foo: string, sb: number, response: number): void;
				public getSocket(): java.net.Socket;
				public getInputStream(): java.io.InputStream;
				public constructor(proxy_host: string, proxy_port: number);
				public connect(param0: com.jcraft.jsch.SocketFactory, param1: string, param2: number, param3: number): void;
				public getOutputStream(): java.io.OutputStream;
				public static getDefaultPort(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ProxySOCKS4 extends com.jcraft.jsch.Proxy {
				public static class: java.lang.Class<com.jcraft.jsch.ProxySOCKS4>;
				public constructor(proxy_host: string);
				public setUserPasswd(user: string, passwd: string): void;
				public close(): void;
				public connect(addr: com.jcraft.jsch.SocketFactory, byteAddress: string, uhe: number, i: number): void;
				public getSocket(): java.net.Socket;
				public getInputStream(): java.io.InputStream;
				public constructor(proxy_host: string, proxy_port: number);
				public connect(param0: com.jcraft.jsch.SocketFactory, param1: string, param2: number, param3: number): void;
				public getOutputStream(): java.io.OutputStream;
				public static getDefaultPort(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ProxySOCKS5 extends com.jcraft.jsch.Proxy {
				public static class: java.lang.Class<com.jcraft.jsch.ProxySOCKS5>;
				public constructor(proxy_host: string);
				public setUserPasswd(user: string, passwd: string): void;
				public close(): void;
				public connect(index: com.jcraft.jsch.SocketFactory, check: string, hostb: number, len: number): void;
				public getSocket(): java.net.Socket;
				public getInputStream(): java.io.InputStream;
				public constructor(proxy_host: string, proxy_port: number);
				public connect(param0: com.jcraft.jsch.SocketFactory, param1: string, param2: number, param3: number): void;
				public getOutputStream(): java.io.OutputStream;
				public static getDefaultPort(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Random {
				public static class: java.lang.Class<com.jcraft.jsch.Random>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.Random interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					fill(param0: androidNative.Array<number>, param1: number, param2: number): void;
				});
				public constructor();
				public fill(param0: androidNative.Array<number>, param1: number, param2: number): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class Request {
				public static class: java.lang.Class<com.jcraft.jsch.Request>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestAgentForwarding extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestAgentForwarding>;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestEnv extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestEnv>;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestExec extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestExec>;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestPtyReq extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestPtyReq>;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestSftp extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestSftp>;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestShell extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestShell>;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestSignal extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestSignal>;
				public setSignal(foo: string): void;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestSubsystem extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestSubsystem>;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel, subsystem: string, want_reply: boolean): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestWindowChange extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestWindowChange>;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class RequestX11 extends com.jcraft.jsch.Request {
				public static class: java.lang.Class<com.jcraft.jsch.RequestX11>;
				public setCookie(cookie: string): void;
				public request(session: com.jcraft.jsch.Session, channel: com.jcraft.jsch.Channel): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SCrypt extends com.jcraft.jsch.KDF {
				public static class: java.lang.Class<com.jcraft.jsch.SCrypt>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.SCrypt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
					getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
				});
				public constructor();
				public init(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
				public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SSHAgentConnector extends com.jcraft.jsch.AgentConnector {
				public static class: java.lang.Class<com.jcraft.jsch.SSHAgentConnector>;
				public isAvailable(): boolean;
				public constructor(factory: com.jcraft.jsch.USocketFactory, usocketPath: java.nio.file.Path);
				public query(sock: com.jcraft.jsch.Buffer): void;
				public constructor(usocketPath: java.nio.file.Path);
				public getName(): string;
				public constructor(factory: com.jcraft.jsch.USocketFactory);
				public query(param0: com.jcraft.jsch.Buffer): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class ServerSocketFactory {
				public static class: java.lang.Class<com.jcraft.jsch.ServerSocketFactory>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.ServerSocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createServerSocket(param0: number, param1: number, param2: java.net.InetAddress): java.net.ServerSocket;
				});
				public constructor();
				public createServerSocket(param0: number, param1: number, param2: java.net.InetAddress): java.net.ServerSocket;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Session {
				public static class: java.lang.Class<com.jcraft.jsch.Session>;
				public daemon_thread: boolean;
				public getPortForwardingL(): androidNative.Array<string>;
				public getPort(): number;
				public setConfig(this_: java.util.Properties): void;
				public getClientVersion(): string;
				public getPortForwardingR(): androidNative.Array<string>;
				public delPortForwardingR(bind_address: string, rport: number): void;
				public setServerAliveInterval(interval: number): void;
				public rekey(): void;
				public setServerAliveCountMax(count: number): void;
				public isConnected(): boolean;
				public connect(): void;
				public setPortForwardingL(bind_address: string, lport: number, host: string, rport: number, ssf: com.jcraft.jsch.ServerSocketFactory): number;
				public setPortForwardingR(rport: number, daemon: string): void;
				public openChannel(this_: string): com.jcraft.jsch.Channel;
				public getUserInfo(): com.jcraft.jsch.UserInfo;
				public delPortForwardingR(rport: number): void;
				public connect(e: number): void;
				public getTimeout(): number;
				public getServerVersion(): string;
				public setTimeout(this_: number): void;
				public setIdentityRepository(identityRepository: com.jcraft.jsch.IdentityRepository): void;
				public getLogger(): com.jcraft.jsch.Logger;
				public setPortForwardingR(bind_address: string, rport: number, host: string, lport: number): void;
				public setHost(host: string): void;
				public setHostKeyRepository(hostkeyRepository: com.jcraft.jsch.HostKeyRepository): void;
				public getServerAliveInterval(): number;
				public setUserInfo(userinfo: com.jcraft.jsch.UserInfo): void;
				public setConfig(key: java.util.Hashtable<string,string>): void;
				public setSocketFactory(sfactory: com.jcraft.jsch.SocketFactory): void;
				public setPortForwardingR(bind_address: string, rport: number, daemon: string, arg: androidNative.Array<any>): void;
				public setPassword(password: androidNative.Array<number>): void;
				public setPortForwardingR(bind_address: string, rport: number, host: string, lport: number, sf: com.jcraft.jsch.SocketFactory): void;
				public setPortForwardingR(rport: number, daemon: string, arg: androidNative.Array<any>): void;
				public setHostKeyAlias(hostKeyAlias: string): void;
				public setPort(port: number): void;
				public noMoreSessionChannels(): void;
				public setPortForwardingR(rport: number, host: string, lport: number): void;
				public setProxy(proxy: com.jcraft.jsch.Proxy): void;
				public getUserName(): string;
				public setLogger(logger: com.jcraft.jsch.Logger): void;
				public setPortForwardingL(conf: string): number;
				public setPortForwardingL(bind_address: string, lport: number, host: string, rport: number): number;
				public delPortForwardingL(bind_address: string, lport: number): void;
				public setPortForwardingL(bind_address: string, lport: number, host: string, rport: number, ssf: com.jcraft.jsch.ServerSocketFactory, connectTimeout: number): number;
				public getStreamForwarder(host: string, port: number): com.jcraft.jsch.Channel;
				public setPassword(password: string): void;
				public getServerAliveCountMax(): number;
				public setSocketForwardingL(bindAddress: string, lport: number, socketPath: string, ssf: com.jcraft.jsch.ServerSocketFactory, connectTimeout: number): number;
				public setClientVersion(cv: string): void;
				public getHostKey(): com.jcraft.jsch.HostKey;
				public getHostKeyRepository(): com.jcraft.jsch.HostKeyRepository;
				public disconnect(): void;
				public getConfig(key: string): string;
				public sendIgnore(): void;
				public setInputStream(in_: java.io.InputStream): void;
				public setX11Host(host: string): void;
				public getHostKeyAlias(): string;
				public setX11Port(port: number): void;
				public setConfig(key: string, value: string): void;
				public setDaemonThread(enable: boolean): void;
				public getUnavailableSignatures(): androidNative.Array<string>;
				public delPortForwardingL(lport: number): void;
				public setPortForwardingR(conf: string): number;
				public setOutputStream(out: java.io.OutputStream): void;
				public getHost(): string;
				public setPortForwardingR(rport: number, host: string, lport: number, sf: com.jcraft.jsch.SocketFactory): void;
				public sendKeepAliveMsg(): void;
				public setPortForwardingL(lport: number, host: string, rport: number): number;
				public setX11Cookie(cookie: string): void;
			}
			export module Session {
				export class Forwarding {
					public static class: java.lang.Class<com.jcraft.jsch.Session.Forwarding>;
				}
				export class GlobalRequestReply {
					public static class: java.lang.Class<com.jcraft.jsch.Session.GlobalRequestReply>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SftpATTRS {
				public static class: java.lang.Class<com.jcraft.jsch.SftpATTRS>;
				public static SSH_FILEXFER_ATTR_SIZE: number = 1;
				public static SSH_FILEXFER_ATTR_UIDGID: number = 2;
				public static SSH_FILEXFER_ATTR_PERMISSIONS: number = 4;
				public static SSH_FILEXFER_ATTR_ACMODTIME: number = 8;
				public static SSH_FILEXFER_ATTR_EXTENDED: number = -2147483648;
				public isBlk(): boolean;
				public getUId(): number;
				public setSIZE(size: number): void;
				public getATime(): number;
				public isDir(): boolean;
				public setACMODTIME(atime: number, mtime: number): void;
				public getMtimeString(): string;
				public toString(): string;
				public getPermissionsString(): string;
				public getGId(): number;
				public getExtended(): androidNative.Array<string>;
				public isChr(): boolean;
				public getPermissions(): number;
				public setPERMISSIONS(permissions: number): void;
				public getSize(): number;
				public getFlags(): number;
				public isFifo(): boolean;
				public isSock(): boolean;
				public getAtimeString(): string;
				public setUIDGID(uid: number, gid: number): void;
				public isReg(): boolean;
				public isLink(): boolean;
				public getMTime(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SftpException {
				public static class: java.lang.Class<com.jcraft.jsch.SftpException>;
				public id: number;
				public constructor(id: number, message: string, e: java.lang.Throwable);
				public constructor(id: number, message: string);
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SftpProgressMonitor {
				public static class: java.lang.Class<com.jcraft.jsch.SftpProgressMonitor>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.SftpProgressMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: number, param1: string, param2: string, param3: number): void;
					count(param0: number): boolean;
					end(): void;
				});
				public constructor();
				public static UNKNOWN_SIZE: number = -1;
				public static PUT: number = 0;
				public static GET: number = 1;
				public init(param0: number, param1: string, param2: string, param3: number): void;
				public count(param0: number): boolean;
				public end(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SftpStatVFS {
				public static class: java.lang.Class<com.jcraft.jsch.SftpStatVFS>;
				public getFragmentSize(): number;
				public getINodes(): number;
				public getMaximumFilenameLength(): number;
				public getUsed(): number;
				public getAvail(): number;
				public getCapacity(): number;
				public getMountFlag(): number;
				public getBlocks(): number;
				public getBlockSize(): number;
				public getFileSystemID(): number;
				public getFreeBlocks(): number;
				public getAvailINodes(): number;
				public getAvailForNonRoot(): number;
				public getSize(): number;
				public getAvailBlocks(): number;
				public getFreeINodes(): number;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Signature {
				public static class: java.lang.Class<com.jcraft.jsch.Signature>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.Signature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(): void;
					update(param0: androidNative.Array<number>): void;
					verify(param0: androidNative.Array<number>): boolean;
					sign(): androidNative.Array<number>;
				});
				public constructor();
				public update(param0: androidNative.Array<number>): void;
				public verify(param0: androidNative.Array<number>): boolean;
				public sign(): androidNative.Array<number>;
				public init(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SignatureDSA extends com.jcraft.jsch.Signature {
				public static class: java.lang.Class<com.jcraft.jsch.SignatureDSA>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.SignatureDSA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: androidNative.Array<number>): void;
					setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: androidNative.Array<number>): void;
					init(): void;
					update(param0: androidNative.Array<number>): void;
					verify(param0: androidNative.Array<number>): boolean;
					sign(): androidNative.Array<number>;
				});
				public constructor();
				public update(param0: androidNative.Array<number>): void;
				public verify(param0: androidNative.Array<number>): boolean;
				public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: androidNative.Array<number>): void;
				public sign(): androidNative.Array<number>;
				public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: androidNative.Array<number>): void;
				public init(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SignatureECDSA extends com.jcraft.jsch.Signature {
				public static class: java.lang.Class<com.jcraft.jsch.SignatureECDSA>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.SignatureECDSA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					setPrvKey(param0: androidNative.Array<number>): void;
					init(): void;
					update(param0: androidNative.Array<number>): void;
					verify(param0: androidNative.Array<number>): boolean;
					sign(): androidNative.Array<number>;
				});
				public constructor();
				public update(param0: androidNative.Array<number>): void;
				public verify(param0: androidNative.Array<number>): boolean;
				public sign(): androidNative.Array<number>;
				public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				public setPrvKey(param0: androidNative.Array<number>): void;
				public init(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SignatureEdDSA extends com.jcraft.jsch.Signature {
				public static class: java.lang.Class<com.jcraft.jsch.SignatureEdDSA>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.SignatureEdDSA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setPubKey(param0: androidNative.Array<number>): void;
					setPrvKey(param0: androidNative.Array<number>): void;
					init(): void;
					update(param0: androidNative.Array<number>): void;
					verify(param0: androidNative.Array<number>): boolean;
					sign(): androidNative.Array<number>;
				});
				public constructor();
				public update(param0: androidNative.Array<number>): void;
				public verify(param0: androidNative.Array<number>): boolean;
				public sign(): androidNative.Array<number>;
				public setPubKey(param0: androidNative.Array<number>): void;
				public setPrvKey(param0: androidNative.Array<number>): void;
				public init(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SignatureRSA extends com.jcraft.jsch.Signature {
				public static class: java.lang.Class<com.jcraft.jsch.SignatureRSA>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.SignatureRSA interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					init(): void;
					update(param0: androidNative.Array<number>): void;
					verify(param0: androidNative.Array<number>): boolean;
					sign(): androidNative.Array<number>;
				});
				public constructor();
				public update(param0: androidNative.Array<number>): void;
				public verify(param0: androidNative.Array<number>): boolean;
				public sign(): androidNative.Array<number>;
				public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				public init(): void;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Slf4jLogger extends com.jcraft.jsch.Logger {
				public static class: java.lang.Class<com.jcraft.jsch.Slf4jLogger>;
				public log(sw: number, this_: string, level: java.lang.Throwable): void;
				public isEnabled(level: number): boolean;
				public log(param0: number, param1: string): void;
				public isEnabled(param0: number): boolean;
				public log(level: number, message: string): void;
				public log(level: number, message: string, cause: java.lang.Throwable): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class SocketFactory {
				public static class: java.lang.Class<com.jcraft.jsch.SocketFactory>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.SocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createSocket(param0: string, param1: number): java.net.Socket;
					getInputStream(param0: java.net.Socket): java.io.InputStream;
					getOutputStream(param0: java.net.Socket): java.io.OutputStream;
				});
				public constructor();
				public getOutputStream(param0: java.net.Socket): java.io.OutputStream;
				public getInputStream(param0: java.net.Socket): java.io.InputStream;
				public createSocket(param0: string, param1: number): java.net.Socket;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UIKeyboardInteractive {
				public static class: java.lang.Class<com.jcraft.jsch.UIKeyboardInteractive>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.UIKeyboardInteractive interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					promptKeyboardInteractive(param0: string, param1: string, param2: string, param3: androidNative.Array<string>, param4: androidNative.Array<boolean>): androidNative.Array<string>;
				});
				public constructor();
				public promptKeyboardInteractive(param0: string, param1: string, param2: string, param3: androidNative.Array<string>, param4: androidNative.Array<boolean>): androidNative.Array<string>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class USocketFactory {
				public static class: java.lang.Class<com.jcraft.jsch.USocketFactory>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.USocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connect(param0: java.nio.file.Path): java.nio.channels.SocketChannel;
					bind(param0: java.nio.file.Path): java.nio.channels.ServerSocketChannel;
				});
				public constructor();
				public bind(param0: java.nio.file.Path): java.nio.channels.ServerSocketChannel;
				public connect(param0: java.nio.file.Path): java.nio.channels.SocketChannel;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UnixDomainSocketFactory extends com.jcraft.jsch.USocketFactory {
				public static class: java.lang.Class<com.jcraft.jsch.UnixDomainSocketFactory>;
				public bind(param0: java.nio.file.Path): java.nio.channels.ServerSocketChannel;
				public connect(param0: java.nio.file.Path): java.nio.channels.SocketChannel;
				public connect(path: java.nio.file.Path): java.nio.channels.SocketChannel;
				public bind(path: java.nio.file.Path): java.nio.channels.ServerSocketChannel;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export abstract class UserAuth {
				public static class: java.lang.Class<com.jcraft.jsch.UserAuth>;
				public static SSH_MSG_USERAUTH_REQUEST: number = 50;
				public static SSH_MSG_USERAUTH_FAILURE: number = 51;
				public static SSH_MSG_USERAUTH_SUCCESS: number = 52;
				public static SSH_MSG_USERAUTH_BANNER: number = 53;
				public static SSH_MSG_USERAUTH_INFO_REQUEST: number = 60;
				public static SSH_MSG_USERAUTH_INFO_RESPONSE: number = 61;
				public static SSH_MSG_USERAUTH_PK_OK: number = 60;
				public userinfo: com.jcraft.jsch.UserInfo;
				public packet: com.jcraft.jsch.Packet;
				public buf: com.jcraft.jsch.Buffer;
				public username: string;
				public start(session: com.jcraft.jsch.Session): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UserAuthGSSAPIWithMIC extends com.jcraft.jsch.UserAuth {
				public static class: java.lang.Class<com.jcraft.jsch.UserAuthGSSAPIWithMIC>;
				public start(i: com.jcraft.jsch.Session): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UserAuthKeyboardInteractive extends com.jcraft.jsch.UserAuth {
				public static class: java.lang.Class<com.jcraft.jsch.UserAuthKeyboardInteractive>;
				public start(lang: com.jcraft.jsch.Session): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UserAuthNone extends com.jcraft.jsch.UserAuth {
				public static class: java.lang.Class<com.jcraft.jsch.UserAuthNone>;
				public static SSH_MSG_SERVICE_REQUEST: number = 5;
				public static SSH_MSG_SERVICE_ACCEPT: number = 6;
				public start(lang: com.jcraft.jsch.Session): boolean;
				public setMethods(methods: string): void;
				public getMethods(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UserAuthPassword extends com.jcraft.jsch.UserAuth {
				public static class: java.lang.Class<com.jcraft.jsch.UserAuthPassword>;
				public start(_message: com.jcraft.jsch.Session): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UserAuthPublicKey extends com.jcraft.jsch.UserAuth {
				public static class: java.lang.Class<com.jcraft.jsch.UserAuthPublicKey>;
				public start(add: com.jcraft.jsch.Session): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class UserInfo {
				public static class: java.lang.Class<com.jcraft.jsch.UserInfo>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.UserInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPassphrase(): string;
					getPassword(): string;
					promptPassword(param0: string): boolean;
					promptPassphrase(param0: string): boolean;
					promptYesNo(param0: string): boolean;
					showMessage(param0: string): void;
				});
				public constructor();
				public showMessage(param0: string): void;
				public getPassphrase(): string;
				public getPassword(): string;
				public promptYesNo(param0: string): boolean;
				public promptPassphrase(param0: string): boolean;
				public promptPassword(param0: string): boolean;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Util {
				public static class: java.lang.Class<com.jcraft.jsch.Util>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class Version {
				public static class: java.lang.Class<com.jcraft.jsch.Version>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export class XDH {
				public static class: java.lang.Class<com.jcraft.jsch.XDH>;
				/**
				 * Constructs a new instance of the com.jcraft.jsch.XDH interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: string, param1: number): void;
					getSecret(param0: androidNative.Array<number>): androidNative.Array<number>;
					getQ(): androidNative.Array<number>;
					validate(param0: androidNative.Array<number>): boolean;
				});
				public constructor();
				public validate(param0: androidNative.Array<number>): boolean;
				public init(param0: string, param1: number): void;
				public getQ(): androidNative.Array<number>;
				public getSecret(param0: androidNative.Array<number>): androidNative.Array<number>;
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module annotations {
				export class SuppressForbiddenApi {
					public static class: java.lang.Class<com.jcraft.jsch.annotations.SuppressForbiddenApi>;
					/**
					 * Constructs a new instance of the com.jcraft.jsch.annotations.SuppressForbiddenApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): androidNative.Array<string>;
					});
					public constructor();
					public value(): androidNative.Array<string>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class Argon2 extends com.jcraft.jsch.Argon2 {
					public static class: java.lang.Class<com.jcraft.jsch.bc.Argon2>;
					public getKey(pass: androidNative.Array<number>, size: number): androidNative.Array<number>;
					public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
					public constructor();
					public init(e: androidNative.Array<number>, this_: number, salt: number, iteration: androidNative.Array<number>, type: androidNative.Array<number>, additional: number, secret: number, memory: number): void;
					public init(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: androidNative.Array<number>, param5: number, param6: number, param7: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class CAST128CBC extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.bc.CAST128CBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class CAST128CTR extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.bc.CAST128CTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class ChaCha20Poly1305 extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.bc.ChaCha20Poly1305>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public doFinal(expected_tag: androidNative.Array<number>, this_: number, foo: number, s1: androidNative.Array<number>, len: number): void;
					public isAEAD(): boolean;
					public isChaCha20(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public init(e: number, this_: androidNative.Array<number>, mode: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export abstract class HMAC extends com.jcraft.jsch.MAC {
					public static class: java.lang.Class<com.jcraft.jsch.bc.HMAC>;
					public name: string;
					public bsize: number;
					public digest: org.bouncycastle.crypto.Digest;
					public etm: boolean;
					public isEtM(): boolean;
					public update(param0: number): void;
					public doFinal(buf: androidNative.Array<number>, offset: number): void;
					public init(this_: androidNative.Array<number>): void;
					public update(i: number): void;
					public init(param0: androidNative.Array<number>): void;
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
					public update(foo: androidNative.Array<number>, s: number, l: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class HMACRIPEMD160 extends com.jcraft.jsch.bc.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.bc.HMACRIPEMD160>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class HMACRIPEMD160ETM extends com.jcraft.jsch.bc.HMACRIPEMD160 {
					public static class: java.lang.Class<com.jcraft.jsch.bc.HMACRIPEMD160ETM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class HMACRIPEMD160OpenSSH extends com.jcraft.jsch.bc.HMACRIPEMD160 {
					public static class: java.lang.Class<com.jcraft.jsch.bc.HMACRIPEMD160OpenSSH>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class KeyPairGenEdDSA extends com.jcraft.jsch.KeyPairGenEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.bc.KeyPairGenEdDSA>;
					public init(privateKey: string, this_: number): void;
					public getPrv(): androidNative.Array<number>;
					public init(privateKey: string, this_: androidNative.Array<number>): void;
					public constructor();
					public getPub(): androidNative.Array<number>;
					public init(param0: string, param1: number): void;
					public init(name: string, prv: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export abstract class MLKEM extends com.jcraft.jsch.KEM {
					public static class: java.lang.Class<com.jcraft.jsch.bc.MLKEM>;
					public params: org.bouncycastle.pqc.crypto.mlkem.MLKEMParameters;
					public decapsulate(encapsulation: androidNative.Array<number>): androidNative.Array<number>;
					public getPublicKey(): androidNative.Array<number>;
					public decapsulate(param0: androidNative.Array<number>): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class MLKEM1024 extends com.jcraft.jsch.bc.MLKEM {
					public static class: java.lang.Class<com.jcraft.jsch.bc.MLKEM1024>;
					public constructor();
					public getPublicKey(): androidNative.Array<number>;
					public decapsulate(param0: androidNative.Array<number>): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class MLKEM768 extends com.jcraft.jsch.bc.MLKEM {
					public static class: java.lang.Class<com.jcraft.jsch.bc.MLKEM768>;
					public constructor();
					public getPublicKey(): androidNative.Array<number>;
					public decapsulate(param0: androidNative.Array<number>): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class SCrypt extends com.jcraft.jsch.SCrypt {
					public static class: java.lang.Class<com.jcraft.jsch.bc.SCrypt>;
					public getKey(pass: androidNative.Array<number>, size: number): androidNative.Array<number>;
					public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
					public constructor();
					public init(this_: androidNative.Array<number>, salt: number, cost: number, blocksize: number): void;
					public init(param0: androidNative.Array<number>, param1: number, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class SEEDCBC extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.bc.SEEDCBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class SNTRUP761 extends com.jcraft.jsch.KEM {
					public static class: java.lang.Class<com.jcraft.jsch.bc.SNTRUP761>;
					public decapsulate(encapsulation: androidNative.Array<number>): androidNative.Array<number>;
					public constructor();
					public getPublicKey(): androidNative.Array<number>;
					public decapsulate(param0: androidNative.Array<number>): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class SignatureEd25519 extends com.jcraft.jsch.bc.SignatureEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.bc.SignatureEd25519>;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>): void;
					public setPrvKey(param0: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class SignatureEd448 extends com.jcraft.jsch.bc.SignatureEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.bc.SignatureEd448>;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>): void;
					public setPrvKey(param0: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export abstract class SignatureEdDSA extends com.jcraft.jsch.SignatureEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.bc.SignatureEdDSA>;
					public setPubKey(pubKey: androidNative.Array<number>): void;
					public setPubKey(param0: androidNative.Array<number>): void;
					public verify(param0: androidNative.Array<number>): boolean;
					public sign(): androidNative.Array<number>;
					public update(this_: androidNative.Array<number>): void;
					public setPrvKey(param0: androidNative.Array<number>): void;
					public init(): void;
					public update(param0: androidNative.Array<number>): void;
					public setPrvKey(prvKey: androidNative.Array<number>): void;
					public verify(e: androidNative.Array<number>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class Twofish128CBC extends com.jcraft.jsch.bc.TwofishCBC {
					public static class: java.lang.Class<com.jcraft.jsch.bc.Twofish128CBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class Twofish128CTR extends com.jcraft.jsch.bc.TwofishCTR {
					public static class: java.lang.Class<com.jcraft.jsch.bc.Twofish128CTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class Twofish192CBC extends com.jcraft.jsch.bc.TwofishCBC {
					public static class: java.lang.Class<com.jcraft.jsch.bc.Twofish192CBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class Twofish192CTR extends com.jcraft.jsch.bc.TwofishCTR {
					public static class: java.lang.Class<com.jcraft.jsch.bc.Twofish192CTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class Twofish256CBC extends com.jcraft.jsch.bc.TwofishCBC {
					public static class: java.lang.Class<com.jcraft.jsch.bc.Twofish256CBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class Twofish256CTR extends com.jcraft.jsch.bc.TwofishCTR {
					public static class: java.lang.Class<com.jcraft.jsch.bc.Twofish256CTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export abstract class TwofishCBC extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.bc.TwofishCBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export abstract class TwofishCTR extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.bc.TwofishCTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module bc {
				export class XDH extends com.jcraft.jsch.XDH {
					public static class: java.lang.Class<com.jcraft.jsch.bc.XDH>;
					public init(privateKey: string, this_: number): void;
					public constructor();
					public init(param0: string, param1: number): void;
					public getSecret(param0: androidNative.Array<number>): androidNative.Array<number>;
					public getSecret(e: androidNative.Array<number>): androidNative.Array<number>;
					public validate(u: androidNative.Array<number>): boolean;
					public validate(param0: androidNative.Array<number>): boolean;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jbcrypt {
				export class BCrypt {
					public static class: java.lang.Class<com.jcraft.jsch.jbcrypt.BCrypt>;
					public pbkdf(round: androidNative.Array<number>, idx: androidNative.Array<number>, i: number, block: androidNative.Array<number>): void;
					public hash(j: androidNative.Array<number>, i: androidNative.Array<number>, i: androidNative.Array<number>): void;
					public constructor();
					public static hashpw(password: string, salt: string): string;
					public static gensalt(log_rounds: number, random: java.security.SecureRandom): string;
					public static gensalt(log_rounds: number): string;
					public static gensalt(): string;
					public static checkpw(i: string, plaintext: string): boolean;
					public crypt_raw(this_: androidNative.Array<number>, password: androidNative.Array<number>, salt: number, log_rounds: androidNative.Array<number>): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jbcrypt {
				export class JBCrypt extends com.jcraft.jsch.BCrypt {
					public static class: java.lang.Class<com.jcraft.jsch.jbcrypt.JBCrypt>;
					public getKey(pass: androidNative.Array<number>, size: number): androidNative.Array<number>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public init(salt: androidNative.Array<number>, iteration: number): void;
					public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class AES128CBC extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AES128CBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class AES128CTR extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AES128CTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class AES128GCM extends com.jcraft.jsch.jce.AESGCM {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AES128GCM>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class AES192CBC extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AES192CBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class AES192CTR extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AES192CTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class AES256CBC extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AES256CBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class AES256CTR extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AES256CTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, keyspec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class AES256GCM extends com.jcraft.jsch.jce.AESGCM {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AES256GCM>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export abstract class AESGCM extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.AESGCM>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public init(tmp: number, e: androidNative.Array<number>, this_: androidNative.Array<number>): void;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class ARCFOUR extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.ARCFOUR>;
					public update(foo: number): void;
					public init(_key: number, e: androidNative.Array<number>, this_: androidNative.Array<number>): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class ARCFOUR128 extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.ARCFOUR128>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public init(i: number, _key: androidNative.Array<number>, foo: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class ARCFOUR256 extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.ARCFOUR256>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public init(i: number, _key: androidNative.Array<number>, foo: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class BlowfishCBC extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.BlowfishCBC>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public init(tmp: number, skeySpec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class BlowfishCTR extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.BlowfishCTR>;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public init(tmp: number, skeySpec: androidNative.Array<number>, e: androidNative.Array<number>): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class DH extends com.jcraft.jsch.DH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.DH>;
					public setF(f: androidNative.Array<number>): void;
					public getE(): androidNative.Array<number>;
					public setG(g: androidNative.Array<number>): void;
					public constructor();
					public setF(param0: androidNative.Array<number>): void;
					public init(): void;
					public getK(): androidNative.Array<number>;
					public setP(p: androidNative.Array<number>): void;
					public checkRange(): void;
					public setP(param0: androidNative.Array<number>): void;
					public setG(param0: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class ECDH256 extends com.jcraft.jsch.jce.ECDHN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.ECDH256>;
					public init(size: number): void;
					public validate(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean;
					public constructor();
					public getSecret(param0: androidNative.Array<number>, param1: androidNative.Array<number>): androidNative.Array<number>;
					public init(): void;
					public init(param0: number): void;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class ECDH384 extends com.jcraft.jsch.jce.ECDHN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.ECDH384>;
					public init(size: number): void;
					public validate(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean;
					public constructor();
					public getSecret(param0: androidNative.Array<number>, param1: androidNative.Array<number>): androidNative.Array<number>;
					public init(): void;
					public init(param0: number): void;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class ECDH521 extends com.jcraft.jsch.jce.ECDHN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.ECDH521>;
					public init(size: number): void;
					public validate(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean;
					public constructor();
					public getSecret(param0: androidNative.Array<number>, param1: androidNative.Array<number>): androidNative.Array<number>;
					public init(): void;
					public init(param0: number): void;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class ECDHN extends com.jcraft.jsch.ECDH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.ECDHN>;
					public init(size: number): void;
					public validate(param0: androidNative.Array<number>, param1: androidNative.Array<number>): boolean;
					public constructor();
					public getSecret(param0: androidNative.Array<number>, param1: androidNative.Array<number>): androidNative.Array<number>;
					public getSecret(r: androidNative.Array<number>, s: androidNative.Array<number>): androidNative.Array<number>;
					public validate(r: androidNative.Array<number>, s: androidNative.Array<number>): boolean;
					public init(param0: number): void;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export abstract class HMAC extends com.jcraft.jsch.MAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMAC>;
					public name: string;
					public bsize: number;
					public algorithm: string;
					public etm: boolean;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(this_: androidNative.Array<number>): void;
					public update(i: number): void;
					public doFinal(this_: androidNative.Array<number>, buf: number): void;
					public init(param0: androidNative.Array<number>): void;
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
					public update(foo: androidNative.Array<number>, s: number, l: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACMD5 extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACMD5>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACMD596 extends com.jcraft.jsch.jce.HMACMD5 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACMD596>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public doFinal(buf: androidNative.Array<number>, offset: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACMD596ETM extends com.jcraft.jsch.jce.HMACMD596 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACMD596ETM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACMD5ETM extends com.jcraft.jsch.jce.HMACMD5 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACMD5ETM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA1 extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA1>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA196 extends com.jcraft.jsch.jce.HMACSHA1 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA196>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public doFinal(buf: androidNative.Array<number>, offset: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA196ETM extends com.jcraft.jsch.jce.HMACSHA196 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA196ETM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA1ETM extends com.jcraft.jsch.jce.HMACSHA1 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA1ETM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA224SSHCOM extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA224SSHCOM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA256 extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA256>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA2562SSHCOM extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA2562SSHCOM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA256ETM extends com.jcraft.jsch.jce.HMACSHA256 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA256ETM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA256SSHCOM extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA256SSHCOM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA384SSHCOM extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA384SSHCOM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA512 extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA512>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA512ETM extends com.jcraft.jsch.jce.HMACSHA512 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA512ETM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class HMACSHA512SSHCOM extends com.jcraft.jsch.jce.HMAC {
					public static class: java.lang.Class<com.jcraft.jsch.jce.HMACSHA512SSHCOM>;
					public isEtM(): boolean;
					public update(param0: number): void;
					public init(param0: androidNative.Array<number>): void;
					public update(i: number): void;
					public constructor();
					public getName(): string;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public doFinal(param0: androidNative.Array<number>, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class KeyPairGenDSA extends com.jcraft.jsch.KeyPairGenDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.KeyPairGenDSA>;
					public constructor();
					public getY(): androidNative.Array<number>;
					public getP(): androidNative.Array<number>;
					public getG(): androidNative.Array<number>;
					public getX(): androidNative.Array<number>;
					public init(param0: number): void;
					public init(key_size: number): void;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class KeyPairGenECDSA extends com.jcraft.jsch.KeyPairGenECDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.KeyPairGenECDSA>;
					public getR(): androidNative.Array<number>;
					public constructor();
					public init(ecsp: number): void;
					public getS(): androidNative.Array<number>;
					public init(param0: number): void;
					public getD(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class KeyPairGenEdDSA extends com.jcraft.jsch.KeyPairGenEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.KeyPairGenEdDSA>;
					public getPrv(): androidNative.Array<number>;
					public constructor();
					public getPub(): androidNative.Array<number>;
					public init(name: string, keylen: number): void;
					public init(param0: string, param1: number): void;
					public init(name: string, prv: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class KeyPairGenRSA extends com.jcraft.jsch.KeyPairGenRSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.KeyPairGenRSA>;
					public getC(): androidNative.Array<number>;
					public getE(): androidNative.Array<number>;
					public constructor();
					public getEP(): androidNative.Array<number>;
					public getP(): androidNative.Array<number>;
					public getN(): androidNative.Array<number>;
					public getEQ(): androidNative.Array<number>;
					public init(param0: number): void;
					public getD(): androidNative.Array<number>;
					public init(key_size: number): void;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class MD5 extends com.jcraft.jsch.HASH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.MD5>;
					public name(): string;
					public update(foo: androidNative.Array<number>, start: number, len: number): void;
					public constructor();
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public digest(): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class PBKDF extends com.jcraft.jsch.PBKDF {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF>;
					public constructor();
					public getKey(spec: androidNative.Array<number>, skf: androidNative.Array<number>, key: number, this_: number): androidNative.Array<number>;
					public getKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: number, param3: number): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export abstract class PBKDF2 extends com.jcraft.jsch.PBKDF2 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF2>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public getKey(param0: androidNative.Array<number>, param1: number): androidNative.Array<number>;
					public init(salt: androidNative.Array<number>, iterations: number): void;
					public getKey(spec: androidNative.Array<number>, key: number): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class PBKDF2HMACSHA1 extends com.jcraft.jsch.jce.PBKDF2 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF2HMACSHA1>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class PBKDF2HMACSHA224 extends com.jcraft.jsch.jce.PBKDF2 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF2HMACSHA224>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class PBKDF2HMACSHA256 extends com.jcraft.jsch.jce.PBKDF2 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF2HMACSHA256>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class PBKDF2HMACSHA384 extends com.jcraft.jsch.jce.PBKDF2 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF2HMACSHA384>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class PBKDF2HMACSHA512 extends com.jcraft.jsch.jce.PBKDF2 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF2HMACSHA512>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class PBKDF2HMACSHA512224 extends com.jcraft.jsch.jce.PBKDF2 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF2HMACSHA512224>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class PBKDF2HMACSHA512256 extends com.jcraft.jsch.jce.PBKDF2 {
					public static class: java.lang.Class<com.jcraft.jsch.jce.PBKDF2HMACSHA512256>;
					public init(param0: androidNative.Array<number>, param1: number): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class Random extends com.jcraft.jsch.Random {
					public static class: java.lang.Class<com.jcraft.jsch.jce.Random>;
					public constructor();
					public fill(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public fill(foo: androidNative.Array<number>, start: number, len: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SHA1 extends com.jcraft.jsch.HASH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SHA1>;
					public name(): string;
					public update(foo: androidNative.Array<number>, start: number, len: number): void;
					public constructor();
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public digest(): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SHA224 extends com.jcraft.jsch.HASH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SHA224>;
					public name(): string;
					public update(foo: androidNative.Array<number>, start: number, len: number): void;
					public constructor();
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public digest(): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SHA256 extends com.jcraft.jsch.HASH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SHA256>;
					public name(): string;
					public update(foo: androidNative.Array<number>, start: number, len: number): void;
					public constructor();
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public digest(): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SHA384 extends com.jcraft.jsch.HASH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SHA384>;
					public name(): string;
					public update(foo: androidNative.Array<number>, start: number, len: number): void;
					public constructor();
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public digest(): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SHA512 extends com.jcraft.jsch.HASH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SHA512>;
					public name(): string;
					public update(foo: androidNative.Array<number>, start: number, len: number): void;
					public constructor();
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getBlockSize(): number;
					public digest(): androidNative.Array<number>;
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureDSA extends com.jcraft.jsch.SignatureDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureDSA>;
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: androidNative.Array<number>): void;
					public constructor();
					public verify(param0: androidNative.Array<number>): boolean;
					public sign(): androidNative.Array<number>;
					public verify(this_: androidNative.Array<number>): boolean;
					public normalize(this_: androidNative.Array<number>): androidNative.Array<number>;
					public init(): void;
					public update(param0: androidNative.Array<number>): void;
					public update(foo: androidNative.Array<number>): void;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>, param2: androidNative.Array<number>, param3: androidNative.Array<number>): void;
					public setPubKey(y: androidNative.Array<number>, p: androidNative.Array<number>, q: androidNative.Array<number>, g: androidNative.Array<number>): void;
					public setPrvKey(x: androidNative.Array<number>, p: androidNative.Array<number>, q: androidNative.Array<number>, g: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureECDSA256 extends com.jcraft.jsch.jce.SignatureECDSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureECDSA256>;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public setPrvKey(param0: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureECDSA384 extends com.jcraft.jsch.jce.SignatureECDSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureECDSA384>;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public setPrvKey(param0: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureECDSA521 extends com.jcraft.jsch.jce.SignatureECDSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureECDSA521>;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public setPrvKey(param0: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export abstract class SignatureECDSAN extends com.jcraft.jsch.SignatureECDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureECDSAN>;
					public verify(r: androidNative.Array<number>): boolean;
					public setPrvKey(d: androidNative.Array<number>): void;
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public verify(param0: androidNative.Array<number>): boolean;
					public sign(): androidNative.Array<number>;
					public setPrvKey(param0: androidNative.Array<number>): void;
					public setPubKey(r: androidNative.Array<number>, s: androidNative.Array<number>): void;
					public init(): void;
					public update(param0: androidNative.Array<number>): void;
					public update(foo: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureEd25519 extends com.jcraft.jsch.SignatureEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureEd25519>;
					public setPubKey(y_arr: androidNative.Array<number>): void;
					public setPrvKey(bytes: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>): void;
					public verify(param0: androidNative.Array<number>): boolean;
					public sign(): androidNative.Array<number>;
					public setPrvKey(param0: androidNative.Array<number>): void;
					public init(): void;
					public update(param0: androidNative.Array<number>): void;
					public update(foo: androidNative.Array<number>): void;
					public verify(sig: androidNative.Array<number>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureEd448 extends com.jcraft.jsch.SignatureEdDSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureEd448>;
					public setPubKey(y_arr: androidNative.Array<number>): void;
					public setPrvKey(bytes: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>): void;
					public verify(param0: androidNative.Array<number>): boolean;
					public sign(): androidNative.Array<number>;
					public setPrvKey(param0: androidNative.Array<number>): void;
					public init(): void;
					public update(param0: androidNative.Array<number>): void;
					public update(foo: androidNative.Array<number>): void;
					public verify(sig: androidNative.Array<number>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureRSA extends com.jcraft.jsch.jce.SignatureRSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureRSA>;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export abstract class SignatureRSAN extends com.jcraft.jsch.SignatureRSA {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureRSAN>;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public setPrvKey(d: androidNative.Array<number>, n: androidNative.Array<number>): void;
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public verify(param0: androidNative.Array<number>): boolean;
					public sign(): androidNative.Array<number>;
					public setPubKey(e: androidNative.Array<number>, n: androidNative.Array<number>): void;
					public verify(this_: androidNative.Array<number>): boolean;
					public init(): void;
					public update(param0: androidNative.Array<number>): void;
					public update(foo: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureRSASHA224SSHCOM extends com.jcraft.jsch.jce.SignatureRSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureRSASHA224SSHCOM>;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureRSASHA256 extends com.jcraft.jsch.jce.SignatureRSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureRSASHA256>;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureRSASHA256SSHCOM extends com.jcraft.jsch.jce.SignatureRSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureRSASHA256SSHCOM>;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureRSASHA384SSHCOM extends com.jcraft.jsch.jce.SignatureRSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureRSASHA384SSHCOM>;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureRSASHA512 extends com.jcraft.jsch.jce.SignatureRSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureRSASHA512>;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class SignatureRSASHA512SSHCOM extends com.jcraft.jsch.jce.SignatureRSAN {
					public static class: java.lang.Class<com.jcraft.jsch.jce.SignatureRSASHA512SSHCOM>;
					public setPrvKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
					public constructor();
					public setPubKey(param0: androidNative.Array<number>, param1: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class TripleDESCBC extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.TripleDESCBC>;
					public init(tmp: number, keyspec: androidNative.Array<number>, keyfactory: androidNative.Array<number>): void;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class TripleDESCTR extends com.jcraft.jsch.Cipher {
					public static class: java.lang.Class<com.jcraft.jsch.jce.TripleDESCTR>;
					public init(tmp: number, keyspec: androidNative.Array<number>, keyfactory: androidNative.Array<number>): void;
					public update(foo: number): void;
					public update(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
					public isCBC(): boolean;
					public update(param0: androidNative.Array<number>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): void;
					public getIVSize(): number;
					public isAEAD(): boolean;
					public updateAAD(foo: androidNative.Array<number>, s1: number, len: number): void;
					public isChaCha20(): boolean;
					public constructor();
					public init(param0: number, param1: androidNative.Array<number>, param2: androidNative.Array<number>): void;
					public getBlockSize(): number;
					public getTagSize(): number;
					public doFinal(foo: androidNative.Array<number>, s1: number, len: number, bar: androidNative.Array<number>, s2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class Util {
					public static class: java.lang.Class<com.jcraft.jsch.jce.Util>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jce {
				export class XDH extends com.jcraft.jsch.XDH {
					public static class: java.lang.Class<com.jcraft.jsch.jce.XDH>;
					public constructor();
					public init(name: string, keylen: number): void;
					public init(param0: string, param1: number): void;
					public getSecret(param0: androidNative.Array<number>): androidNative.Array<number>;
					public getSecret(Q: androidNative.Array<number>): androidNative.Array<number>;
					public validate(u: androidNative.Array<number>): boolean;
					public validate(param0: androidNative.Array<number>): boolean;
					public getQ(): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jgss {
				export class GSSContextKrb5 extends com.jcraft.jsch.GSSContext {
					public static class: java.lang.Class<com.jcraft.jsch.jgss.GSSContextKrb5>;
					public init(ex: androidNative.Array<number>, this_: number, token: number): androidNative.Array<number>;
					public constructor();
					public dispose(): void;
					public create(param0: string, param1: string): void;
					public init(param0: androidNative.Array<number>, param1: number, param2: number): androidNative.Array<number>;
					public create(principalName: string, mgr: string): void;
					public getMIC(ex: androidNative.Array<number>, this_: number, message: number): androidNative.Array<number>;
					public getMIC(param0: androidNative.Array<number>, param1: number, param2: number): androidNative.Array<number>;
					public isEstablished(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module juz {
				export class Compression extends com.jcraft.jsch.Compression {
					public static class: java.lang.Class<com.jcraft.jsch.juz.Compression>;
					public end(): void;
					public uncompress(result: androidNative.Array<number>, e: number, tmp: androidNative.Array<number>): androidNative.Array<number>;
					public init(param0: number, param1: number): void;
					public init(type: number, level: number): void;
					public uncompress(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>): androidNative.Array<number>;
					public constructor();
					public init(type: number, level: number, session: com.jcraft.jsch.Session): void;
					public compress(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>): androidNative.Array<number>;
					public compress(result: androidNative.Array<number>, this_: number, buf: androidNative.Array<number>): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class Adler32 extends com.jcraft.jsch.jzlib.Checksum {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.Adler32>;
					public update(this_: androidNative.Array<number>, buf: number, index: number): void;
					public copy(): com.jcraft.jsch.jzlib.Checksum;
					public reset(): void;
					public copy(): com.jcraft.jsch.jzlib.Adler32;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getValue(): number;
					public reset(param0: number): void;
					public reset(init: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class CRC32 extends com.jcraft.jsch.jzlib.Checksum {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.CRC32>;
					public copy(): com.jcraft.jsch.jzlib.CRC32;
					public copy(): com.jcraft.jsch.jzlib.Checksum;
					public reset(): void;
					public update(buf: androidNative.Array<number>, index: number, len: number): void;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getValue(): number;
					public reset(vv: number): void;
					public reset(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class Checksum {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.Checksum>;
					/**
					 * Constructs a new instance of the com.jcraft.jsch.jzlib.Checksum interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						update(param0: androidNative.Array<number>, param1: number, param2: number): void;
						reset(): void;
						reset(param0: number): void;
						getValue(): number;
						copy(): com.jcraft.jsch.jzlib.Checksum;
					});
					public constructor();
					public copy(): com.jcraft.jsch.jzlib.Checksum;
					public reset(): void;
					public update(param0: androidNative.Array<number>, param1: number, param2: number): void;
					public getValue(): number;
					public reset(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class Compression extends com.jcraft.jsch.Compression {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.Compression>;
					public end(): void;
					public init(param0: number, param1: number): void;
					public init(this_: number, type: number): void;
					public uncompress(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>): androidNative.Array<number>;
					public constructor();
					public compress(status: androidNative.Array<number>, this_: number, buf: androidNative.Array<number>): androidNative.Array<number>;
					public init(type: number, level: number, session: com.jcraft.jsch.Session): void;
					public uncompress(foo: androidNative.Array<number>, foo: number, status: androidNative.Array<number>): androidNative.Array<number>;
					public compress(param0: androidNative.Array<number>, param1: number, param2: androidNative.Array<number>): androidNative.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class Deflate {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.Deflate>;
					public clone(): any;
				}
				export module Deflate {
					export class Config {
						public static class: java.lang.Class<com.jcraft.jsch.jzlib.Deflate.Config>;
					}
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class Deflater extends com.jcraft.jsch.jzlib.ZStream {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.Deflater>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class DeflaterOutputStream {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.DeflaterOutputStream>;
					public deflater: com.jcraft.jsch.jzlib.Deflater;
					public buffer: androidNative.Array<number>;
					public mydeflater: boolean;
					public static DEFAULT_BUFSIZE: number = 512;
					public write(flush: androidNative.Array<number>, this_: number, b: number): void;
					public write(b: number): void;
					public deflate(flush: number): number;
					public close(): void;
					public flush(): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class GZIPException {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.GZIPException>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class GZIPHeader {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.GZIPHeader>;
					public clone(): any;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class InfBlocks {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.InfBlocks>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class InfCodes {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.InfCodes>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class InfTree {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.InfTree>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class Inflate {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.Inflate>;
				}
				export module Inflate {
					export class Return {
						public static class: java.lang.Class<com.jcraft.jsch.jzlib.Inflate.Return>;
					}
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class Inflater extends com.jcraft.jsch.jzlib.ZStream {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.Inflater>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class InflaterInputStream {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.InflaterInputStream>;
					public inflater: com.jcraft.jsch.jzlib.Inflater;
					public buf: androidNative.Array<number>;
					public eof: boolean;
					public static DEFAULT_BUFSIZE: number = 512;
					public myinflater: boolean;
					public read(this_: androidNative.Array<number>, b: number, off: number): number;
					public available(): number;
					public read(): number;
					public reset(): void;
					public fill(): void;
					public markSupported(): boolean;
					public close(): void;
					public skip(this_: number): number;
					public mark(readlimit: number): void;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class JZlib {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.JZlib>;
				}
				export module JZlib {
					export class WrapperType {
						public static class: java.lang.Class<com.jcraft.jsch.jzlib.JZlib.WrapperType>;
						public static NONE: com.jcraft.jsch.jzlib.JZlib.WrapperType;
						public static ZLIB: com.jcraft.jsch.jzlib.JZlib.WrapperType;
						public static GZIP: com.jcraft.jsch.jzlib.JZlib.WrapperType;
						public static ANY: com.jcraft.jsch.jzlib.JZlib.WrapperType;
						public static valueOf(name: string): com.jcraft.jsch.jzlib.JZlib.WrapperType;
						public static values(): androidNative.Array<com.jcraft.jsch.jzlib.JZlib.WrapperType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class StaticTree {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.StaticTree>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class Tree {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.Tree>;
				}
			}
		}
	}
}

declare module com {
	export module jcraft {
		export module jsch {
			export module jzlib {
				export class ZStream {
					public static class: java.lang.Class<com.jcraft.jsch.jzlib.ZStream>;
				}
			}
		}
	}
}

//Generics information:


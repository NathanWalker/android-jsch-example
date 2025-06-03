import "@nativescript/core/globals";

declare const self: any;

self.onmessage = (msg) => {
  if (!msg || !msg.data) {
    console.warn("Malformed message sent.");
    return;
  }
  const { host, port, username, password, command } = msg.data;
  try {
    // ─────────── ALL JSch/Network SSH Connection Handling ───────────
    // Everything here runs on the WORKER THREAD, not on the UI thread.

    const jsch = new com.jcraft.jsch.JSch();
    const session = jsch.getSession(username, host, port);
    session.setPassword(password);

    // (Optional) Turn off host‐key checking if you don't have known_hosts:
    const config = new java.util.Properties();
    config.put("StrictHostKeyChecking", "no");
    session.setConfig(config);

    session.connect(10_000); // 10-second timeout

    const channel = session.openChannel("exec") as com.jcraft.jsch.ChannelExec;
    channel.setCommand(command);

    // If you need to capture stdout:
    const inputStream = channel.getInputStream();
    channel.connect();

    // Read until EOF
    const reader = new java.io.BufferedReader(
      new java.io.InputStreamReader(inputStream, "UTF-8")
    );
    let line = null;
    let output = "";
    while ((line = reader.readLine()) != null) {
      output += line + "\n";
    }
    reader.close();

    const exitStatus = channel.getExitStatus();
    channel.disconnect();
    session.disconnect();

    // ─────────── POST BACK TO MAIN THREAD ───────────
    self.postMessage({
      success: true,
      exitStatus: exitStatus,
      output: output,
    });
  } catch (e) {
    // If anything throws (e.g. JSchException), send it back:
    self.postMessage({
      success: false,
      message: e.toString(),
    });
  }
};

(<any>self).onerror = (error) => {
  console.error("worker onerror:", error, error.stack);
};

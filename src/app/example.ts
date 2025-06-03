import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

@Component({
  selector: "example",
  templateUrl: "./example.html",
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Example {
  worker: Worker;

  constructor() {
    this.worker = new Worker(new URL("./jsch.worker", import.meta.url));

    this.worker.onmessage = (msg) => {
      const data = msg.data;
      if (data.success) {
        console.log("SSH exited with", data.exitStatus);
        console.log("SSH output:\n", data.output);

        // → If you need to update an Observable or UI Label, you are already
        //    back on the main/UI thread here.
        //    e.g. this.myOutputString.set(data.output);
      } else {
        console.error("SSH failed:", data.message);
      }
    };

    // 3. Listen for error events (optional but recommended)
    this.worker.onerror = (err) => {
      console.error("Worker error:", err.message, err.error);
    };
  }

  connect() {
    if (__ANDROID__) {
      const payload = {
        host: "10.0.2.2", // localhost from Android emulator
        port: 22, // enable SSH on your local machine (Sharing > Remote Login in macOS Settings)
        username: "you", // your local username
        password: "yourpassword", // your local password
        command: "ls -al /Applications", // any command you want to run
      };
      // Connect on background thread:
      this.worker.postMessage(payload);
    }
  }
}

## NativeScript using Workers for Background Threading

This is an Android only demo using [JSch](https://github.com/mwiede/jsch) for demonstrating a local SSH connection to your own computer from an Android emulator. You can try literally anything.

Just be sure to set your own computer's username/password in the payload [here](src/app/example.ts#38).

```
ns debug android
```

Try changing [example](src/app/example.ts#38) payload to run a different command on your own machine from the Android emulator.

You can also try adjusting any JSch API within the background thread [here](src/app/jsch.worker.ts).
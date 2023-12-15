package com.movie;
import android.media.MediaPlayer;
import android.media.PlaybackParams;
import android.os.Build;
import android.widget.Toast;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
//import com.facebook.react.bridge.pr

public class VoiceChangerModule extends ReactContextBaseJavaModule {
    VoiceChangerModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "VoiceChangerModule";
    }

    @ReactMethod
    public void changeVoiceToAlien(String message) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_LONG).show();
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String MyNameModule(){
        return "Saquib";
    }

//    @ReactMethod
//    public void Payment(Promise) {
//        Promise.resolve({uri:''})
//    }
}

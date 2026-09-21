// Purpose: Compile-time exercise of the public API.
import{parseTranscript,radarPoints,slidingWindow}from'@gbesse/jev-meetingpulse';const lines=parseTranscript('10:00:00 Ada: Hello');slidingWindow(lines);radarPoints([.2,.8]);

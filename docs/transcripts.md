# Transcript contract

Meeting Pulse accepts `HH:MM:SS speaker: text`. A missing speaker becomes `unknown`; malformed lines remain visible with a null time. The moving window is computed from parsed timestamps. Agenda text is appended to each axis instruction within the same request and is never sent as separate state. Speaker and line counts are deterministic code, not model questions.

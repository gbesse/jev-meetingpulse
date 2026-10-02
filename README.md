# jev-meetingpulse

**Watch declared meeting signals update from a growing transcript, with decisions and open questions quoted exactly.**

[![Tests](https://github.com/gbesse/jev-meetingpulse/actions/workflows/test.yml/badge.svg)](https://github.com/gbesse/jev-meetingpulse/actions/workflows/test.yml) [MIT](LICENSE) · Node.js 22+ · Zero runtime dependencies · Public alpha

Bring text from your transcription tool. Meeting Pulse parses lines, evaluates only new windows, renders a radar-ready snapshot, and identifies flagged lines by selection—not generated summary.

## Try it in 30 seconds

```sh
git clone https://github.com/gbesse/jev-meetingpulse.git && cd jev-meetingpulse
npm run demo
node bin/jev-meetingpulse.mjs watch examples/transcript.log --fake --interval-seconds 2
```

The demo is synthetic and makes no network call.

## Call real Jev

```sh
export TYPESAFE_API_KEY=... # paid requests go to https://api.typesafe.ai/v1/systemone
node bin/jev-meetingpulse.mjs estimate transcript.log --agenda agenda.txt
node bin/jev-meetingpulse.mjs watch transcript.log --window-minutes 5 --interval-seconds 45
node bin/jev-meetingpulse.mjs replay meeting-pulse.json --html report.html
```

Replay performs no provider call. Use `parseTranscript`, `slidingWindow`, `createEvaluator`, `evaluateWindow`, `radarPoints`, and `renderReport` as a library. See [the transcript contract](docs/transcripts.md).

## How it decides

The default pack asks typed questions for engagement, an explicit decision, an open question, agenda alignment and constructive tone. Agenda context lives in each instruction; transcript lines alone form state. Positive decision/open-question checks trigger a second `choice` over exact lines. Speaker and line counts are code-owned. A quiet interval triggers no call.

## Boundaries

This is not transcription, minutes generation, recording, or productivity measurement. It accepts text only. The radar reflects only declared axes and illustrative thresholds. Jev can misread injected content, negation, numbers and long irrelevant windows; keep a human in the loop. English works best.

## Shareable demo report

Run `npm run demo:report` to capture this repository’s bundled example as one JSON object with the project purpose, version and complete demo output. The command fails if the demo fails, so the report is useful when sharing a reproducible first look or reporting unexpected behavior. The bundled demo’s data and safety boundaries still apply.

## Validation

`npm run check`, `npm run typecheck`, `npm test`, and `npm run demo` run in CI on Node 22 and 24. Live smoke is opt-in and capped at two paid requests.

## Related projects

[Semantic Watch](https://github.com/gbesse/semantic-watch) · [DecisionPacks](https://github.com/gbesse/decisionpacks) · [Question Forge](https://github.com/gbesse/question-forge)

Independent project; not affiliated with TypeSafe AI. [TypeSafe API](https://docs.typesafe.ai/api) · [known model limitations](https://docs.typesafe.ai/model-jaggedness/jev-1.13)

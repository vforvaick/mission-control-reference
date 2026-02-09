# Known Issues

Technical debt and bugs discovered during development.

## Critical

### Agent Restart Loop
- **Symptom**: Agent process restarts repeatedly (6+ times)
- **Cause**: Unhandled exceptions in heartbeat, possibly LLM timeout
- **Impact**: Agent appears unresponsive
- **Workaround**: Check PM2 logs, increase error backoff
- **Fix**: Implement proper error boundaries and graceful degradation

## High

### No Typing Indicator
- **Symptom**: User sends message, no feedback until response arrives
- **Cause**: `sendChatAction("typing")` not implemented
- **Impact**: User thinks bot is unresponsive
- **Fix**: Add typing indicator before LLM call in telegram-webhook.js

### Missing Reminder System
- **Symptom**: User asks for reminder, agent says "OK" but nothing happens
- **Cause**: No `CREATE_REMINDER` tool implemented
- **Impact**: Core functionality gap
- **Fix**: Implement reminder skill with scheduled notifications

### Context Window Overflow
- **Symptom**: Agent responses become incoherent mid-conversation
- **Cause**: Heartbeat injects too much context (resources, memory, etc.)
- **Impact**: LLM truncates important information
- **Fix**: Prioritize context injection, implement sliding window

## Medium

### Stale Agent Status
- **Symptom**: Dashboard shows agent as "online" when actually sleeping
- **Cause**: LastHeartbeat not checked against threshold
- **Impact**: Misleading UI
- **Fix**: Add status staleness check in frontend

### Duplicate Task Claims
- **Symptom**: Two agents claim the same task
- **Cause**: Race condition between heartbeat cycles
- **Impact**: Wasted work, potential conflicts
- **Fix**: Implement optimistic locking with version field

### Memory Leak in Long Sessions
- **Symptom**: VPS memory grows over time
- **Cause**: Unbounded arrays in workingMemory
- **Impact**: Eventually crashes agent
- **Fix**: Implement ring buffer limits

## Low

### CSS Inconsistencies
- **Symptom**: Slight visual glitches in dark mode
- **Cause**: Missing theme variable overrides
- **Impact**: Aesthetic only
- **Fix**: Audit all CSS for theme compliance

### Verbose Logging
- **Symptom**: Logs fill up disk space
- **Cause**: No log rotation configured
- **Impact**: Disk full on VPS
- **Fix**: Configure PM2 log rotation

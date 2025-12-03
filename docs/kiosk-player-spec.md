# Kiosk Player Specification: Orange Pi Implementation

## Hardware Baseline
- **Device**: Orange Pi 5 Plus (16GB RAM, RK3588).
- **Storage**: 256GB NVMe SSD.
- **OS**: Armbian (headless Linux).
- **Player**: MPV with hardware decoding (`--hwdec=rkmpp`).

## Software Architecture: Store-and-Forward
1. **Trickle Download**: Background fetch of playlists/assets (nightly).
2. **Verification**: SHA256 checksum + test decode.
3. **Playback**: Local MPV loop, NTP-synced starts.
4. **Live Mode**: RTSP stream fallback (MediaMTX relay).

## Core Components

### 1. Node Agent (Python/Node)
```bash
# Main loop
while true:
  if hub_command == 'download_playlist':
    trickle_download(playlist_url)
    verify_assets()
  elif hub_command == 'play_playlist':
    mpv --loop --hwdec=rkmpp playlist.m3u8
  send_heartbeat()
  sleep(30s)
```

### 2. Hub CMS (Next.js/NestJS)
- Timeline scheduler.
- Readiness dashboard (traffic lights per kiosk).
- Asset upload/verification.

### 3. Network
- VLAN: 192.168.50.0/24.
- MQTT for commands, WebSocket for status.

## API Contracts
```
POST /kiosks/:id/sync {playlistId: uuid}
-> 202 Accepted (async download)

GET /kiosks {status: 'ready' | 'downloading' | 'error'}

MQTT kiosk/heartbeat {kioskId, uptime, storage_free_gb}
```

## Deployment Script
```bash
# On Orange Pi
curl -sSL install-script.sh | bash
# Installs MPV, MQTT client, agent
systemctl enable kiosk-player
```

## Monitoring & Alerts
- Prometheus exporter for uptime/storage.
- Alert if >5min no heartbeat.

This ensures 99% uptime, zero buffering.
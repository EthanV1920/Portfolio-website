# Vosburg Portfolio

One-page portfolio site for Ethan Vosburg built with Next.js 15, TypeScript, Tailwind CSS, and a static Nginx Docker deployment.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
docker build -t vosburg-portfolio .
mkdir -p /opt/vosburg-logs
docker run --rm -p 8070:80 -v /opt/vosburg-logs:/var/log/nginx vosburg-portfolio
```

Then open `http://localhost:8070`.

## Visit Logs

The container writes JSON access logs to:

```bash
/var/log/nginx/visits.json
```

If you start the container with the volume mount above, you can read them on the host at:

```bash
tail -f /opt/vosburg-logs/visits.json
```

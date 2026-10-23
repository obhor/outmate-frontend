"""Tiny local preview server with SPA fallback for OutMate's pretty routes."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
import os

ROOT = Path(__file__).resolve().parent
os.chdir(ROOT)

class SPAHandler(SimpleHTTPRequestHandler):
    def _apply_spa_fallback(self):
        path = urlsplit(self.path).path
        candidate = (ROOT / path.lstrip('/')).resolve()
        try:
            candidate.relative_to(ROOT)
            inside_root = True
        except ValueError:
            inside_root = False
        if inside_root and candidate.is_file():
            return False
        # Do not disguise missing asset requests as HTML responses.
        if path.startswith('/assets/') or Path(path).suffix:
            return False
        self.path = '/index.html'
        return True

    def do_GET(self):
        self._apply_spa_fallback()
        return super().do_GET()

    def do_HEAD(self):
        self._apply_spa_fallback()
        return super().do_HEAD()

if __name__ == '__main__':
    server = ThreadingHTTPServer(('127.0.0.1', 8000), SPAHandler)
    print('OutMate preview available at http://127.0.0.1:8000')
    print('Press Ctrl+C to stop.')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nStopping preview server.')
    finally:
        server.server_close()

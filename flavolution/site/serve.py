# Local dev server for the Flavolution site: like `python -m http.server`,
# but tells the browser never to cache, so a rebuild always shows up.
#   python flavolution/site/serve.py 5960
import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 5960
ROOT = os.path.dirname(os.path.abspath(__file__))


class NoCache(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()


http.server.ThreadingHTTPServer(("127.0.0.1", PORT), NoCache).serve_forever()

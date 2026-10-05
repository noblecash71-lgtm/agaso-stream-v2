from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
ROOT = Path(__file__).resolve().parent / 'dist'
class SpaHandler(SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(ROOT),**kwargs)
    def _fallback(self):
        path=urlsplit(self.path).path
        if path != '/' and not (ROOT/path.lstrip('/')).is_file(): self.path='/index.html'
    def do_GET(self): self._fallback(); super().do_GET()
    def do_HEAD(self): self._fallback(); super().do_HEAD()
if __name__=='__main__': ThreadingHTTPServer(('0.0.0.0',3000),SpaHandler).serve_forever()

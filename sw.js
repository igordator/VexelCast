// Service worker mínimo: só existe para o Windows deixar "instalar" a página como app
// (sem guardar nada em cache, para abrires sempre a versão mais recente).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

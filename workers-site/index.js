// workers-site/index.js
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Let KV Asset Handler serve the asset from the bucket (your .output/public folder)
    return await getAssetFromKV(event);
  } catch (e) {
    // In case of error (asset not found, etc.) return a 404 response.
    return new Response('404 Not Found', { status: 404 });
  }
}
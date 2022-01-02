export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/location' && request.cf) {
      return new Response(JSON.stringify({ lat: request.cf.latitude, lng: request.cf.longitude }));
    }

    return env.ASSETS.fetch(request);
  }
}
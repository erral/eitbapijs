export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

        let res = await fetch("https://mam.eitb.eus/mam/REST/ServiceMultiweb/Playlist2/MULTIWEBTV/" + context.params.chapter, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
          })
        const response = await res.json()
        const PROGRAMS = response.web_media.map((emission) => {
            return {
                '@id': 'https://' + request.headers.get('host') + '/api/tv/emissions/' + emission.ID,
                '@type': 'TV program',
                'title': emission.NAME_EU,
                'description': emission.SHORT_DESC_EU
          }})
        const result = {
            "@context": "http://www.w3.org/ns/hydra/context.jsonld",
            "@id": 'https://' + request.headers.get('host') + '/api/tv/chapters/' + context.params.chapter,
            "@type": "TV show emissions",
            "member": PROGRAMS
        }
        
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      } 
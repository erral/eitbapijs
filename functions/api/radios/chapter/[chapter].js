export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

        let res = await fetch("https://api.eitb.eus/api/getChapterData/" + context.params.chapter, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
          })
        const response = await res.json()
        
        const result = {
            "@context": "http://www.w3.org/ns/hydra/context.jsonld",
            "@id": context.request.url.hostname + '/api/radios/chapter/' + context.params.chapter,
            "@type": "Radio Program",
            "title": response.title,
            "date": response.pub_date,
            "duration": response.duration,
            "url": response.audio,
            "parent": request.url.hostname + "/radios/seasons/" + response.idtemporada
        }
        
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      }
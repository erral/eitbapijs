export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

        let res = await fetch("https://api.eitb.eus/api/getSeasons/" + context.params.program, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
          })
        const response = await res.json()
        const SEASONS= response.map((season) => {
            return {
                '@id': 'https://' + request.headers.get('host') + '/api/radios/seasons/' + season.id,
                '@type': 'Radio playlist',
                'title': season.title,
                'description': season.description
          }})
        const result = {
            "@context": "http://www.w3.org/ns/hydra/context.jsonld",
            "@id": 'https://' + request.headers.get('host') + '/api/radios/program' + context.params.program,
            "@type": "Radio Station Program Season List",
            "member": SEASONS
        }
        
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      }
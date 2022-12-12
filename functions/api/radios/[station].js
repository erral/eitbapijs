export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

        let res = await fetch("https://api.eitb.eus/api/getPrograms/" + context.params.station, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
          })
        const response = await res.json()
        const PROGRAMS = response.map((program) => {
            return {
                '@id': request.url.hostname + '/api/radios/programs/' + program.id,
                '@type': 'Radio program',
                'title': program.title,
                'description': program.short_description
          }})
        const result = {
            "@context": "http://www.w3.org/ns/hydra/context.jsonld",
            "@id": request.url.hostname + '/api/radios/' + context.params.station,
            "@type": "Radio Station Program List",
            "parent": {},
            "member": PROGRAMS
        }
        
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      }
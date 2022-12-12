export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

    const result = {
            "@context": "http://www.w3.org/ns/hydra/context.jsonld",
            "@id": 'https://' + request.headers.get('host') + '/api/',
            "@type": "Media List",
            "member": [
                {
                    "@context": "http://www.w3.org/ns/hydra/context.jsonld",
                    "@id": 'https://' + request.headers.get('host') + '/radios/',
                    "@type": "Media",
                    title: "Irratiak"
                },
                {
                    "@context": "http://www.w3.org/ns/hydra/context.jsonld",
                    "@id": 'https://' + request.headers.get('host') + '/tv/',
                    "@type": "Media",
                    title: "Telebista"
                }

            ]
        }
        
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      }
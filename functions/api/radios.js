export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
      console.log(new Map(request.headers))
        const RADIOS = [
            {id: 'euskadi_irratia', title: 'Euskadi irratia'},
            {id: 'radio_euskadi', title: 'Radio euskadi'},
            {id: 'radio_vitoria', title: 'Radio Vitoria'},
            {id: 'gaztea', title: 'Gaztea'}
        ].map((radio) => {
            return {
            '@id': 'https://' + request.headers.get('host') + '/api/radios/' + radio.id,
            '@type': 'Radio Station Program list',
            'parent': '/api/radios',
            'title': radio.title
            }
        })
        const result = {
            '@context': "http://www.w3.org/ns/hydra/context.jsonld",
            '@id': 'https://' + request.headers.get('host') +  "/api/radios",
            '@type': "RadioStationList",
            parent: request.url.hostname + "/api",
            member: RADIOS
        }
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      }
export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
        let res = await fetch("https://mam.eitb.eus/mam/REST/ServiceMultiweb/WebClasif/MULTIWEBTV/8/1/0/", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
          })
        const response = await res.json()
          
        const CATEGORIES = response.web_clasif.map((category) => {
            return {
            '@id': 'https://' + request.headers.get('host') + '/api/tv/category/' + category.CLASIFICACION,
            '@type': 'TV Category list',
            'parent': 'https://' + request.headers.get('host') + '/api/tv',
            'title': category.CLASIFICACION_EU,
            'title_es': category.CLASIFICACION_ES,
            'title_en': category.CLASIFICACION_EN
            }
        })
        const result = {
            '@context': "http://www.w3.org/ns/hydra/context.jsonld",
            '@id': 'https://' + request.headers.get('host') +  "/api/tv",
            '@type': "TV Category list",
            parent: 'https://' + request.headers.get('host') + "/api",
            member: CATEGORIES
        }
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
        
      }
export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

        let res = await fetch("https://mam.eitb.eus/mam/REST/ServiceMultiweb/Grouplist/ByGroup/MULTIWEBTV/8/" + context.params.playlist, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
          })
        const response = await res.json()
        const PROGRAMS = response.web_group.map(group => 
            group.web_playlist.map(chapter => 
                {
                    return {
                    '@id': 'https://' + request.headers.get('host') + '/api/tv/chapters/' + chapter.ID,
                    '@type': 'TV program',
                    'title': chapter.NAME,
                    'description': chapter.SHORT_DESC
                 }})).flat()
        
        const result = {
            "@context": "http://www.w3.org/ns/hydra/context.jsonld",
            "@id": 'https://' + request.headers.get('host') + '/api/category/' + context.params.category,
            "@type": "Radio Station Program List",
            "member": PROGRAMS
        }
        
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      } 
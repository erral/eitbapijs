export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

        let res = await fetch("https://mam.eitb.eus/mam/REST/ServiceMultiweb/Video4/MULTIWEBTV/" + context.params.emission, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
          })
        const response = await res.json()
        const PROGRAMS = response.web_media.map(group => group.RENDITIONS.map(item => {return {
            'width': item.FRAME_WIDTH,
            'height': item.FRAME_HEIGHT,
            'encoding_rate': item.ENCODING_RATE,
            'url': item.PMD_URL,
            'name': response.name,
            'still_url': group.STILL_URL,
            'thumbnail_url': group.THUMBNAIL_URL,
            'brodacast_date': group.BROADCST_DATE, 
            'channel': group.BROADCAST_CHANNEL
          }})).flat()
        const result = {
            "@context": "http://www.w3.org/ns/hydra/context.jsonld",
            "@id": 'https://' + request.headers.get('host') + '/api/tv/emissions/' + context.params.emission,
            "@type": "TV show emission",
            "member": PROGRAMS
        }
        
        return new Response(JSON.stringify(result)  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      } 
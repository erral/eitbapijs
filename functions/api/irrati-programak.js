export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;
        let res = await fetch("https://api.eitb.eus/api/getPrograms/euskadi_irratia", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          }
          })
        // console.log(res.json())          
        return new Response(JSON.stringify(await res.json())  , {
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
      }
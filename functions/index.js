export async function onRequestGet(context) {
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

        const html = `<!DOCTYPE html>
        <body>
          <h1>EITB api proxy</h1>
          <p></p>
        </body>`
        
        return new Response(html , {
          headers: {
            'Content-Type': 'text/html;charset=UTF-8',
          },
        });
      }
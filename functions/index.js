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
          <h1>EITB api metodoak</h1>
          <ul>
          <li><a href="/api">Media</a></li>
          <li><a href="/api/radios">Irratiak</a></li>
          <li><a href="/api/radios/gaztea">Irrati programak (adb. Gaztea)</a></li>
          <li><a href="/api/radios/programs/5511">Irrati programa baten sasoi zerrenda (adb. Dida!)</a></li>
          <li><a href="/api/radios/seasons/8912942">Irrati programa bateko sasoiko emisioak (adb. Dida! 2022-2023)</a></li>
          <li><a href="/api/radios/chapter/9040061">Emisio konkretu bat (adb. Dida! 2022/12/09)</a></li>
          </ul>
        </body>`
        
        return new Response(html , {
          headers: {
            'Content-Type': 'text/html;charset=UTF-8',
          },
        });
      }
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
          <p>
          Proiektu honetan EITBko dokumentatu gabeko api-ari deiak egiten zaizkio eta erantzuna birmoldatzen da
          Kodi-ko pluginarentzako erabilgarri izan daitezen.
          </p>
          <p>
          Cloudflareko functions azpiegituraren gainean funtzionatzen du.
          </p>
          <p>
          Iturburu kodea <a href="https://github.com/aitzol/eitbapijs">https://github.com/aitzol/eitbapijs</a> 
          </p>
          <p>
          Guzti honen jatorria
          <ul>
          <li><a href="https://erral.github.io/eitbapi/#/">Aurreko api zerbitzua</a></li>
          <li><a href="https://mastodon.eus/@xezpeleta/109474128828441267">Mastodonen</a></li>
          </ul>
          </p>
          <ul>
          <li><a href="/api">Media</a></li>
          <li><a href="/api/radios">Irratiak</a></li>
          <li><a href="/api/radios/gaztea">Irrati programak (adb. Gaztea)</a></li>
          <li><a href="/api/radios/programs/5511">Irrati programa baten sasoi zerrenda (adb. Dida!)</a></li>
          <li><a href="/api/radios/seasons/8912942">Irrati programa bateko sasoiko emisioak (adb. Dida! 2022-2023)</a></li>
          <li><a href="/api/radios/chapter/9040061">Emisio konkretu bat (adb. Dida! 2022/12/09)</a></li>
          <li><a href="/api/tv">Telebista programa kategoriak</a></li>
          <li><a href="/api/tv/category/PELICULAS">Kategoria bateko programak (adb. Pelikulak)</a></li>
          <li><a href="/api/tv/playlist/4621">Programa zerrendak (adb. Gaur egun)</a></li>
          <li><a href="/api/tv/chapters/7285">TV programa atalak (adb. Gaur egun 2022/12/12 )</a></li>
          <li><a href="/api/tv/emissions/210800">Emisio bat (adb. Gaur egun 2022/12/12 14:00)</a></li>
          </ul>
        </body>`
        
        return new Response(html , {
          headers: {
            'Content-Type': 'text/html;charset=UTF-8',
          },
        });
      }
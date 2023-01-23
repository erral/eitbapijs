export const index = async (request) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
      <meta name="description" content="">
      <meta name="author" content="">


      <title>EITB Nahieran API</title>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />


      <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!--[if lt IE 9]>
        <script src="//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="//oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
      <![endif]-->

    </head>

    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                  <div class="jumbotron">
                    <h1>EITB Nahieran APIa (v2)</h1>
                    <p class="lead">
                      Webgune honek <a href="http://www.eitb.tv">EITB</a> Nahieran zerbitzuaren APIa eskaintzen du.
                    </p>
                    <p class="lead">
                      <a class="btn btn-primary btn-lg" href="https://erral.github.io/eitbapi">Ikusi aurkezpen zaharra</a>
                    </p>
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <ul>
                    <li>
                        Chrome/Chromium-en ondo ikusteko <a href="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?utm_source=chrome-app-launcher-info-dialog">instalatu JSON Formatter</a>
                    </li>
                    <li>
                        Firefox-en ondo ikusteko <a href="https://addons.mozilla.org/en-US/firefox/addon/jsonview/">instalatu JSONView</a>
                    </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h2>Telebista APIa</h2>
                <div class="btn-group-vertical" role="group">
                <a class="btn btn-default btn-lg" href="/tv/programs"}">
                  Telebista programa guztiak ikusi
                </a>
                <a class="btn btn-default btn-lg" href="/tv"}">
                    Telebista programen kategoriak ikusi
                  </a>
                  <a class="btn btn-default btn-lg" href="/tv/ACTUALIDAD">
                    Albistegi zerrenda ikusi
                  </a>
                </div>
              </div>
              <div class="col-sm-6">
                <h2>Irrati APIa</h2>
                <div class="btn-group-vertical" role="group">
                  <a class="btn btn-default btn-lg" href="/radios">
                    Irratiko programa zerrenda ikusi
                  </a>
                  <a class="btn btn-default btn-lg" href="/radios/euskadi_irratia">
                    Irrati baten programa guztiak ikusi
                  </a>
                </div>
              </div>

            </div>
        </div>



    </body>
  </html>
  `;

  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
};

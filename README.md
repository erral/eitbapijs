# EITB Nahieran APIa

[EITB Nahieran](https://www.eitb.eus/eu/nahieran/) zerbitzuaren datuak API bat erabiliz zerbitzatzeko JavaScript aplikazioa

## Aspaldi, galaxia urrun baten....

Python-en oinarritutako aplikazio bat](https://github.com/erral/eitbapi) egin zuen norbaitek EITB Nahieranen APIa egiteko eta [Herokun](https://www.heroku.com/) argitaratu zerbitzu horrek eskaintzen zuen doako kontu bat erabiliz. 2022ko azaroan, ordea, [Herokuk desaktibatu egin zituen doako kontu horiek](https://blog.heroku.com/next-chapter).

Horrela, euskal galaxia EITBren API dokumentatu eta libre gabe gelditu zen, jada martxan zuen [Kodi plugina](https://github.com/erral/plugin.video.eitb) jokoz kanpo gelditu zelarik.

Baina lehengo gerlaria, lagun gehiagorekin elkartu (eskerrik asko [xezpeleta](https://github.com/xezpeleta), [aitzol](https://github.com/aitzol), [bipoza](https://github.com/bipoza) eta [ionliz](https://github.com/ionlizarazu)) eta gudaroste sendoa osatu zuen guztia modan zegoen lengoaiara, hau da, JavaScriptera itzultzeko asmoz.

Hau gudaroste horrek egindakoen istorioa da...


## eh?

Bale, frikikeriak alde batera utzita proiektu honen asmoa lehen Pythonen idatzita eta Herokun argitaratuta nuen EITB Nahieranen APIa berriz ere martxan jartzea da, horretarako oraingoan [Cloudflare Workers](https://workers.cloudflare.com/) zerbitzua erabiliz.

Horretarako APIa JavaScripten berridatzi behar izan dut. Horretan arestian aipatutako lagunak izan ditut bidaikide, batzuk ideiak ematen, beste batzuk xaxatzen, beste hura hau abiarazten...

API honek, oinarriak Bittorrek prestatutako [nahieran-js](https://github.com/bipoza/nahieran-js) liburutegia darabil. Liburutegi horrek edozein JavaScript aplikaziotan erabili daitezkeen [funtzio sorta](https://bipoza.github.io/nahieran-js/) dauka eta berauek inportatuz guztiz abstraitzen ditu EITBren zerbitzarietara egin beharreko deiak.

Cloudflare erabiltzearen ideia Aitzolena izan zen, berak abiatu zuen [proiektu hau](https://github.com/aitzol/eitbapijs). Nik nahieran-js erabiltzeko aldaketak egin nizkion eta nire Cloudflare kontuan argitaratu dut APIa berarekin adostuta.

[Xabi](https://github.com/xezpeleta) eta [Ion](https://github.com/ionlizarazu) ere aipatu nahi ditut, lehenengoa xaxatzaile ofizial gisa eta bigarrena nire React Master bezala. Hasiera baten React-en oinarritutako [EITB Nahieranen klon bat](https://github.com/erral/eitbapi-react) egin bainuen eta berak lagundu baitzidan bidea ikusten.

## Erakutsi APIa demontre!

Beno, ba APIa lehengoaren oso oso antzekoa da eta bere helbidea hauxe da [https://eitbapi.erral.workers.dev/](https://eitbapi.erral.workers.dev/)

## Nola aldaketaren bat egin nahi dut!

Aldaketaren bat egin nahi baduzu edo zerbait gehitu edo kendu, jakin hau JavaScript aplikazio bat dela. Kodearekin batera erabili beharreko node bertsio zein den dator (erabili [nvm](https://github.com/nvm-sh/nvm) zure ingurunea prestatzeko mesedez), eta ondoren ohiko komandoak exekutatu beharko dituzu:

```bash
npm install
```

APIa Cloudflareren Workers zerbitzuan argitaratuko denez, guztia martxan jarri eta probatzeko [wrangler](https://github.com/cloudflare/wrangler) erabili behar da. Horretarako zure node instalazioan instalatu beharko duzu, horrela:

```bash
npm install -g wrangler
```

eta ondoren hau martxan jartzeko:

```bash
wrangler dev
```

eta Cloudflaren argitaratzeko

```bash
wrangler publish
```

Esan beharrik ez dago (edo agian bai) Cloudflaren kontua beharko duzula hau zure kabuz argitaratu nahi baduzu.

Erabili nahi baduzu ez, doakoa da, egin nahi duzuna!

# Kodearen lizentzia


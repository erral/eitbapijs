import {index} from './handlers/index.js';
import {
  radios,
  radio_programs,
  radio_program,
  radio_program_season,
  radio_program_season_chapter,
} from './handlers/radio.js';
import {
  tv,
  tv_category,
  tv_category_programs,
  tv_category_program_playlist,
  tv_category_program_playlist_chapter,
  tv_programs,
} from './handlers/tv.js';

import { TV, RADIO, PROGRAM } from './constants.js';

import { Router } from 'itty-router';

const router = Router();
router.get('/', index);
router.get(`/${TV}`, tv);
router.get(`/${TV}/programs`, tv_programs);
router.get(`/${TV}/:category`, tv_category);
router.get(`/${TV}/${PROGRAM}/:program`, tv_category_programs);
router.get(`/${TV}/${PROGRAM}/:program/:playlist`, tv_category_program_playlist);
router.get(
  `/${TV}/${PROGRAM}/:program/:playlist/:chapter`,
  tv_category_program_playlist_chapter,
);

router.get(`/${RADIO}`, radios);
router.get(`/${RADIO}/:radio`, radio_programs);
router.get(`/${RADIO}/:radio/:program`, radio_program);
router.get(`/${RADIO}/:radio/:program/:season`, radio_program_season);
router.get(
  `/${RADIO}/:radio/:program/:season/:chapter`,
  radio_program_season_chapter,
);

router.all('*', () => new Response('404, not found!', { status: 404 }));

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request));
});

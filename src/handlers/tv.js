import { HEADERS, TV } from '../constants';

import {
  getTVCategories,
  getTVCategoryProgramPlaylist,
  getTVCategoryProgramPlaylistChapter,
  getTVCategoryPrograms,
} from 'nahieran-js';
import { getTVCategory } from 'nahieran-js';

export const tv = async (request) => {
  const results = await getTVCategories().then((res) => res);
  console.table(results.categories[0]);
  const categories = results.categories.map((category) => {
    return {
      '@id': `https://${request.headers.get('host')}/tv/${category.slug}`,
      '@type': 'TV Category',
      parent: `https://${request.headers.get('host')}/${TV}`,
      title_eu: category.eu,
      title_eu: category.eu,
      title_es: category.es,
      title_en: category.en,
    };
  });
  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': 'https://' + request.headers.get('host') + '/tv',
    '@type': 'TV Category list',
    parent: 'https://' + request.headers.get('host') + '/api',
    member: categories,
  };

  return new Response(JSON.stringify(result), HEADERS);
};

export const tv_category = async (request) => {
  const { params } = request;
  const results = await getTVCategory(params.category).then((res) => res);

  const programs = results.program.map((playlist) => {
    return {
      '@id': `https://${request.headers.get('host')}/${TV}/${params.category}/${
        playlist.id
      }`,
      '@type': 'TV Program',
      title: playlist.title,
      description: playlist.description,
    };
  });
  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${TV}/${params.category}`,
    '@type': 'TV Program List',
    member: programs,
  };
  return new Response(JSON.stringify(result), HEADERS);
};

export const tv_category_programs = async (request) => {
  const { params } = request;
  const results = await getTVCategoryPrograms(params.program).then(
    (res) => res,
  );

  const playlists = results.playlist.map((program) => {
    return {
      '@id': `https://${request.headers.get('host')}/${TV}/${params.category}/${
        params.program
      }/${program.id}`,
      '@type': 'TV Program Playlist',
      title: program.name,
      description: program.description,
      images: program.images,
    };
  });

  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${TV}/${params.category}`,
    '@type': 'TV Category Program',
    member: playlists,
  };
  return new Response(JSON.stringify(result), HEADERS);
};

export const tv_category_program_playlist = async (request) => {
  const { params } = request;
  const results = await getTVCategoryProgramPlaylist(params.playlist).then(
    (res) => res,
  );

  const programs = results.playlist.map((program) => {
    return {
      '@id': `https://${request.headers.get('host')}/${TV}/${params.category}/${
        params.program
      }/${program.id}`,
      '@type': 'TV Program Chapter',
      title: program.name,
      description: program.description,
      images: program.images,
    };
  });
  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${TV}/${params.category}/${
      params.program
    }`,
    '@type': 'TV Category Program Playlist',
    member: programs,
  };

  return new Response(JSON.stringify(result), HEADERS);
};

export const tv_category_program_playlist_chapter = async (request) => {
  const { params } = request;
  const results = await getTVCategoryProgramPlaylistChapter(
    params.chapter,
  ).then((res) => res);

  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${TV}/${params.category}/${
      params.program
    }/${params.playlist}/${params.chapter}`,
    '@type': 'TV Program Chapter',
    ...results,
  };
  return new Response(JSON.stringify(result), HEADERS);
};

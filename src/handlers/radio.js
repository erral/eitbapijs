import { HEADERS, RADIO } from '../constants';
import {
  getRadioPrograms,
  getRadioProgramSeason,
  getRadioProgramSeasonChapter,
  getRadioProgramSeasons,
  getRadios,
} from 'nahieran-js';

export const radios = async (request) => {
  const query_results = await getRadios().then((res) => res);
  const results = query_results.radios.map((radio) => {
    return {
      '@id': `https://${request.headers.get('host')}/${RADIO}/${radio.slug}`,
      '@type': 'Radio Station Program list',
      parent: `https://${request.headers.get('host')}/${RADIO}`,
      title: radio.name,
    };
  });

  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${RADIO}`,
    '@type': 'RadioStationList',
    parent: `https://${request.headers.get('host')}`,
    member: results,
  };

  return new Response(JSON.stringify(result), HEADERS);
};

export const radio_programs = async (request) => {
  const { params } = request;

  const results = await getRadioPrograms(params.radio).then((res) => res);

  const programs = results.programs.map((program) => {
    return {
      '@id': `https://${request.headers.get('host')}/${RADIO}/${params.radio}/${
        program.id
      }`,
      '@type': 'Radio program',
      title: program.title,
      description: program.short_description,
      image: program.image,
    };
  });

  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${RADIO}/${params.radio}`,
    '@type': 'Radio Station Program List',
    member: programs,
  };

  return new Response(JSON.stringify(result), HEADERS);
};

export const radio_program = async (request) => {
  const { params } = request;

  const results = await getRadioProgramSeasons(params.program).then(
    (res) => res,
  );

  const seasons = results.seasons.map((chapter) => {
    return {
      '@id': `https://${request.headers.get('host')}/${RADIO}/${params.radio}/${
        chapter.id
      }`,

      '@type': 'Radio playlist',
      title: chapter.title,
      description: chapter.description,
    };
  });

  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${RADIO}/${params.radio}/${
      params.program
    }`,
    '@type': 'Radio Station Program Season List',
    member: seasons,
  };

  return new Response(JSON.stringify(result), HEADERS);
};

export const radio_program_season = async (request) => {
  const { params } = request;

  const results = await getRadioProgramSeason(params.season).then((res) => res);
  const seasons = results.chapters.map((chapter) => {
    return {
      '@id': `https://${request.headers.get('host')}/${RADIO}/${params.radio}/${
        params.season
      }/${chapter.id}`,
      '@type': 'Radio Station Program Season Chapter',
      title: chapter.title,
      description: chapter.description,
    };
  });

  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${RADIO}/${params.radio}/${
      params.season
    }`,
    '@type': 'Radio Station Program Chapter List',
    member: seasons,
  };

  return new Response(JSON.stringify(result), HEADERS);
};

export const radio_program_season_chapter = async (request) => {
  const { params } = request;

  const results = await getRadioProgramSeasonChapter(params.chapter).then(
    (res) => res,
  );

  const result = {
    '@context': 'http://www.w3.org/ns/hydra/context.jsonld',
    '@id': `https://${request.headers.get('host')}/${RADIO}/${params.radio}/${
      params.program
    }/${params.season}/${params.chapter}`,
    '@type': 'Radio Program',
    title: results.title,
    date: results.pub_date,
    duration: results.duration,
    url: results.audio,
    parent: `https://${request.headers.get('host')}/${RADIO}/${params.radio}/${
      params.season
    }/${results.idtemporada}`,
  };

  return new Response(JSON.stringify(result), HEADERS);
};

import { useRouter } from 'next/router';
import { useMemo } from 'react';
import routes from './routes';

export const useI18nHref = (path: string, params: Record<string, string> = {}) => {
  const router = useRouter();

  const locale = params.locale || router.locale;

  return useMemo(() => {
    const i18nPaths = routes.get(path);

    if (process.env.NODE_ENV !== 'production' && !i18nPaths) {
      console.warn(`Missing page path for: \`${path}\``);
    }

    const i18nPath = i18nPaths?.[locale as string] || path;

    return Object.entries(params).reduce((acc, iter) => {
      const [key, value] = iter;

      return acc.replace(`[${key}]`, value);
    }, i18nPath);
  }, [locale, params, path]);
};

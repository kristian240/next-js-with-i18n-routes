import Link from 'next/link';
import { useRouter } from 'next/router';
import { useI18nHref } from '../lib/i18n-routes/useI18nHref';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale, pathname, query } = router;
  const otherLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {otherLocales.map((locale) => {
          console.log({
            pathname,
            query,
            href: useI18nHref(pathname, { locale, ...query } as Record<string, string>),
          });
          return (
            <li key={locale}>
              <Link
                href={{ pathname, query }}
                as={useI18nHref(pathname, { locale, ...query } as Record<string, string>)}
                locale={locale}
              >
                <a>{locale}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

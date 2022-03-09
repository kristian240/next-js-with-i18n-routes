import Link from 'next/link';
import { useRouter } from 'next/router';
import LocaleSwitcher from '../components/locale-switcher';
import { i18nPaths } from '../lib/i18n-routes/paths';
import { useI18nHref } from '../lib/i18n-routes/useI18nHref';

export default function IndexPage(props) {
  const router = useRouter();
  const { locale } = router;

  const indexHref = useI18nHref(i18nPaths.Index);
  const pageHref = useI18nHref(i18nPaths.Page);
  const dynamicHref = useI18nHref(i18nPaths.Dynamic.Page, { slug: 'infinum' });

  return (
    <div>
      <h1>Index page</h1>

      <p>Current locale: {locale}</p>
      <p>Current path: {router.pathname}</p>
      <p>Current URL: {router.asPath}</p>

      <LocaleSwitcher />

      <Link href={indexHref}>
        <a>To index</a>
      </Link>
      <br />

      <Link href={pageHref}>
        <a>To page</a>
      </Link>
      <br />

      <Link href={dynamicHref}>
        <a>To dynamic page</a>
      </Link>
      <br />
    </div>
  );
}

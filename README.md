[Boilerplate](https://github.com/vercel/next.js/tree/canary/examples/i18n-routing)

# Next.js with i18n routes

## How To Setup

First step is to define the application [paths](https://github.com/kristian240/next-js-with-i18n-routes/blob/master/lib/i18n-routes/paths.js). This file contains an object that can be created to satisfies application needs. The leaf values need to match your pages naming.

Second is to define the [routes](https://github.com/kristian240/next-js-with-i18n-routes/blob/master/lib/i18n-routes/routes.js). Routes is a map where key is previously defined path and the value is object. Object contains the i18n route per language. If you wish to translate only some of the languages, that is doable, the fallback will be the default path.

Third step is to add redirects to the [`next.config.js`](https://github.com/kristian240/next-js-with-i18n-routes/blob/master/next.config.js) so Next knows how to handle those paths. 

That's it! The paths are set up now and we can start using them.

## How To Use

To use the i18n path, hook [`useI18nHref`](https://github.com/kristian240/next-js-with-i18n-routes/blob/master/lib/i18n-routes/useI18nHref.ts) is created.

```tsx
import paths from "./paths"
import NextLink from "next/link"

export const AboutPageLink = (props) => {
  const href = useI18nHref(paths.App.Public.About)
  
  return <NextLink href={href} {...props} />
}

export const BlogIdPageLink = ({ id, ...rest }) => {
  const href = useI18nHref(paths.App.Public.About, { id })
  
  return <NextLink href={href} {...rest} />
}
```

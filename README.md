# About #

This project is a test to resolve an issue with using Next.js and Storybook with the new feature in `styled-jsx` v3 that enables importing regular `.css` files for use in `<style jsx>` tags.

Storybook and all of its dependencies are isolated in the `/storybook` directory. This works fine when css is written directly in the `<style jsx>` tags. Once `import` is used, Storybook shows the following error:
  
```
Error: styled-jsx/css: if you are getting this error it means that your `global` tagged template literals were not transpiled.
```

## Usage ##

To start Storybook, `cd` into the `/storybook` directory and run `npm run sb`. This will start Storybook at <http://localhost:4000/>.

The example component is located in `components/nav.js`.
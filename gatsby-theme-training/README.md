# gatsby-theme-training

Gatsby theme to create training materials.

## Installation

```bash
yarn add gatsby-theme-training
```

Then add to your `gatsby-config.js`

```js
module.exports = {
  plugins: [`gatsby-theme-training`],
};
```

## Features

### Included plugins

- `gatsby-plugin-sass`
- `gatsby-plugin-emotion`
- `gatsby-plugin-mdx`
- `gatsby-plugin-netlify`
- `gatsby-plugin-sharp`
- `gatsby-plugin-react-helmet`

## Usage

### Theme options

- lessonPath: Location of lessons. Default to `'lessons'`.
- disableAuth: Disable netlify identify.

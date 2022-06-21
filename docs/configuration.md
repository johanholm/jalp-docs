# Configuratiton

The diffirent breakpoints can be overwritten

```scss
@use "jalp" with (
  $breakpoints: (
    tablet: 767px,
    desktop-min: 1366px,
    desktop: 1920px,
  )
);
```

Alternatively you can create your own file and set the default variables in there, and then use that file instead of 'jalp'

```scss
// functions.scss
@forward "jalp" with (
  $breakpoints: (
    tablet: 767px,
    desktop-min: 1366px,
    desktop: 1920px,
  )
);

// heading.scss
@use "./functions";

h1 {
  @include functions.fluid(font-size, 14px, 12px, 16px, 18px);
}
```

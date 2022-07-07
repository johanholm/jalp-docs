# Device helpers

The devices are set the by breakpoints variable, check out the [configuraiton doc](/configuration.md) for more information.

### Usage

```scss
@use "jalp";

@include jalp.onMobile {
  // Mobile
}

@include jalp.onTablet {
  // Tablet
}

@include jalp.onTabletUp {
  // Tablet and larger sizes
}

@include jalp.onTabletDown {
  // Tablet and lower sizes
}

@include jalp.onDesktopMin {
  // Desktop min css
}

@include jalp.onDesktopMinUp {
  // Desktop min css and larger sizes
}

@include jalp.onDesktopMinDown {
  // Desktop min and lower sizes
}
@include jalp.onDesktop {
  // Desktop css
}
```

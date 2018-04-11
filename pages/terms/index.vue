<template>
  <div class="terms">
    <div class="terms-container">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'assets/sass/util.scss';
.terms {
  font-family: Arial, Helvetica, sans-serif
}
.terms-container {
  margin: 32px;
}

h3 {
  font-size: 20pt;
}

h5 {
  font-size: 16pt;
  margin-top: 32px;
}

p {
  margin: 16px 0;
}

li {
  margin: 8px 0;
}

@media screen and (min-width: $screen-lg) {
    .terms {
        display: grid;
        grid-template-areas: '. container .';
        grid-template-columns: 1fr $container 1fr;
    }
    .terms-container {
      grid-area: container;
    }
}
</style>

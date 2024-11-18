module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard-scss',
    // 'stylelint-config-tailwindcss/scss',
  ],
  rules: {
    // 'at-rule-no-unknown': null,
    'selector-class-pattern': null,
    'scss/load-no-partial-leading-underscore': null,
    'scss/at-rule-no-unknown': true,
  },
  fix: true,
};

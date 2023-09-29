export const tmpl = `
<form class="form">
  <h2 class="form__title">{{ title }}</h2>
  <div class="form__group">
    {{#each formFields as |formField|}}
      {{#> childEntry}}
        {{{formField}}}
      {{/childEntry}}
    {{/each}}
  </div>
  <div class="form__btn">
    {{{button}}}
    {{{link}}}
  </div>
</form>
`;
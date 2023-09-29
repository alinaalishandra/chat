export const tmpl = `
<form class="form profile__form">
  <h2 class="form__title">{{ title }}</h2>
  <div class="form__group profile__form-group">
    {{#each formFields as |formField|}}
      {{#> childEntry}}
        {{{formField}}}
      {{/childEntry}}
    {{/each}}
  </div>
  {{#each buttons as |button|}}
      {{#> childEntry}}
        {{{button}}}
      {{/childEntry}}
    {{/each}}
</form>
`;
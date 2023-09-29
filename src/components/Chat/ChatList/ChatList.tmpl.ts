export const tmpl = `
<ul>
	{{#each chatListItems as |chatListItem|}}
    {{#> childEntry}}
      {{{chatListItem}}}
    {{/childEntry}}
  {{/each}}
</ul>
`;
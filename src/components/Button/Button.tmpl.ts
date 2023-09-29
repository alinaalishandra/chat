export const tmpl = `
<button type="{{type}}" class="{{class}}">
	{{#if link}}
    {{{link}}}
  {{else}}
	  {{text}}
  {{/if}}
</button>
`;
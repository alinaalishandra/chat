export const tmpl = `
<label>{{text}}</label>
  {{#if textError}}
		<label class="label__error">{{textError}}</label>
  {{/if}}
`;
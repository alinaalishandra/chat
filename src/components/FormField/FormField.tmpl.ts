export const tmpl = `
<div class="form__field">
	{{{ label }}}
	<input class="input" type="{{type}}" value="{{value}}" readonly="{{readOnly}}"/>
	{{{ labelError }}}
</div>
`;
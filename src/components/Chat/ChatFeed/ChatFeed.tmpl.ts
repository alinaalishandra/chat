export const tmpl = `
<div class="chat__feed">
	<div class="chat__header">
		<a class="link chat__link" href="/profile">Профиль</a>
	  <input class="input chat__input" type="search" name="message" placeholder="Поиск">
	</div>
  {{{chatList}}}
</div>
`;
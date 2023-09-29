import {FormFieldOptions} from "@/interfaces/interfaces.ts";

export const formFieldsData: Array<FormFieldOptions> = [
	{typeInput: 'email', name: 'email', text: 'Почта', textError: 'Неверная почта', value: 'ivanich@yandex.ru'},
	{typeInput: 'text', name: 'login', text: 'Логин', textError: 'Неверный логин', value: 'ivannn'},
	{typeInput: 'text', name: 'first_name', text: 'Имя', textError: 'Укажите Имя', value: 'Иван'},
	{typeInput: 'text', name: 'second_name', text: 'Фамилия', textError: 'Укажите Фамилию', value: 'Иванов'},
	{typeInput: 'text', name: 'display_name', text: 'Имя в чате', textError: 'Неверная запись', value: 'Иван'},
	{typeInput: 'phone', name: 'phone', text: 'Телефон', textError: 'Неверный телефон', value: '+79900991020'},
	{typeInput: 'password', name: 'password', text: 'Пароль', textError: 'Неверный пароль'},
	{typeInput: 'password', name: 'password', text: 'Пароль (ещё раз)', textError: 'Пароли не совпадают'}
];

export const profileFormFieldsData = formFieldsData.slice(0);

export const links = [
	{ text: 'Изменить данные', linkId: 'changeUser' },
	{ text: 'Изменить пароль', linkId: 'changePassword' },
	{ text: 'Выйти', linkId: 'out', linkHref: '/sign-in' },
]
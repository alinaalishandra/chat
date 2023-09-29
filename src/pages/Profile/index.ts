import Handlebars from 'handlebars';
import {tmpl} from "@/pages/Profile/Profile.tmpl.ts";
import {FormField} from "@/components/FormField";
import {Person} from "@/components/Person";
import {ProfileForm} from "@/components/ProfileForm";
import {profileFormFieldsData} from "@/data.ts";
import {BackTo} from "@/components/BackTo";
import './Profile.scss';
import {ButtonOptions} from "@/interfaces/interfaces.ts";


export const Profile = (options: Record<string, string>) => {
  const readOnly = true;

  const formFields = profileFormFieldsData
    .filter(i => i.name !== 'password')
    .map(i => {
      i.readOnly = readOnly;
      i.value = 'test';
      return FormField(i)
    });
  
  const buttons: ButtonOptions[] = [
    { text: 'Изменить данные', type: 'button', class: 'primary-btn'},
    { text: 'Изменить пароль', type: 'button', class: 'primary-btn' },
    { text: 'Выйти', type: 'button', class: 'primary-btn exit-btn', link: '/sign-in' },
    { text: 'Сохранить', type: 'submit', class: 'submit-btn' },
  ]
  
  
  return Handlebars.compile(tmpl)({
    backAction: BackTo({path: '/chat'}),
    avatar: Person({}),
    form: ProfileForm({
      title: options.name,
      formFields,
      buttons,
    })
  });
}
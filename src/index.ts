import './style.scss'
import {Signin} from "./pages/Signin";
import {Signup} from "./pages/Signup";
import {NotFound} from "./pages/NotFound";
import {Profile} from "@/pages/Profile";
import {ChatPage} from "@/pages/ChatPage";
import {ErrorPage} from "@/pages/Error";

const ROUTES: Record<string, string> = {
    '/': Signin({title: 'Вход', submitBtnText: 'Войти', actionBtnText: 'Нет аккаунта?'}),
    '/sign-in': Signin({title: 'Вход', submitBtnText: 'Войти', actionBtnText: 'Нет аккаунта?'}),
    '/sign-up': Signup({title: 'Регистрация', submitBtnText: 'Зарегистрироваться', actionBtnText: 'Войти'}),
    '/chat': ChatPage(),
    '/profile': Profile({name: 'Иван'}),
    '/error': ErrorPage({status: '500', text: 'Мы уже фиксим'}),
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    if (root) {
        const component = ROUTES[window.location.pathname] || NotFound({status: '404', text: 'Не туда попали'});
        root.innerHTML = component;
    }
});


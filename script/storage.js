let pages = [
    {
        informationHeader: 'Инвестируйте в своё время',
        informationDescription: 'Мега Транс всегда заботится о своих клиентах, с нами Вы можете '
                                +'позволить себе не волноваться и провести время как всегда хотели.',
    },
    {
        informationHeader: 'О нас',
        informationDescription: 'Мы - компания с многолетним стажем, которая была основана в 2003 году. '
                                +'На нашем счету тысячи перевозок. Наша отличительная черта заключается '
                                +'в том, что мы очень плотно общаемся с нашими клиентами и всегда приходим '
                                +'к общему мнению.',
    },
    {
        informationHeader: 'Мы научились соответствовать стандартам даже самых требовательных клиентов.',
        informationDescription: 'Наши услуги направлены на то, чтобы груз всегда попадал '
        +'в нужное место в нужное время.',
        note: 'Три наших главных преимущества:',
        advantage: 'Опыт'
    },
    {
        informationHeader: 'Ни одного негативного опыта за всю историю компании.',
        informationDescription: '',
        advantage: 'Ответственность'
    },
    {
        informationHeader: 'У нас самые доступные цены на рынке. Если найдете дешевле'
                            +'при том же уровне услуги - вернём деньги!',
        informationDescription: '',
        advantage: 'Цена'
    },
    {
        phoneCode: 'код города: +4812',
        phoneSecretary: 'секретарь: 38-81-15',
        phoneTransport: 'транс. отдел: 65-51-65',
        company: 'Мега Транс',
        adress: 'Россия, г. Смоленск ул. Нахимова д. 29',
        mailHeader: 'Почта генерального директора:',
        email: 'mega_trans_sm@mail.ru',
        formNote: 'Оставьте, пожалуйста, свои контактные данные, чтобы наш менеждер смог с Вами связаться.'
    }
]

//made it this way because.....why the hell not???
let abilityToScroll = {
    //I know that this fild should be private
    ability: true,

    get () {
        return abilityToScroll.ability;
    },

    set (newAbility) {
        abilityToScroll.ability = newAbility;
    }
}

let menuCollapse = {
    collapsed: true,

    get () {
        return menuCollapse.collapsed;
    },

    set (newState) {
        menuCollapse.collapsed = newState;
    }
}

export {pages, abilityToScroll, menuCollapse};
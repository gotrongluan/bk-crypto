export default [
    {
        key: 'home',
        path: '/home',
        name: 'Home',
        component: 'Home/Home',
    },
    {
        key: 'algorithm',
        path: '/algorithm',
        name: 'Algorithms',
        routes: [
            {
                key: 'rabbit',
                path: '/rabbit',
                name: 'Rabbit',
                component: 'Algorithm/Rabbit',
            },
            {
                key: 'aes',
                path: '/aes',
                name: 'AES',
                component: 'Algorithm/AES',
            },
            {
                key: 'rsa',
                path: '/rsa',
                name: 'RSA',
                component: 'Algorithm/RSA',
            },
            {
                key: 'default',
                path: '/',
                hideInMenu: true,
                redirect: '/algorithm/rabbit'
            },
            {
                key: 'algorithm-failed',
                hideInMenu: true,
                redirect: '/exception/404'
            }
        ]
    },
    {
        key: 'aboutus',
        path: '/about-us',
        name: 'About Us',
        component: 'AboutUs/AboutUs',
    },
    {
        key: 'help',
        path: '/help',
        name: 'Help',
        component: 'Help/Help',
    },
    {
        key: 'exception',
        path: '/exception',
        hideInMenu: true,
        routes: [
            {
                key: 'type',
                path: '/:type',
                component: 'Exception/Exception',
            },
            {
                key: 'exception-failed',
                redirect: '/exception/404'
            }
        ]
    },
    {
        key: 'default',
        path: '/',
        hideInMenu: true,
        redirect: '/home'
    },
    {
        key: 'failed',
        hideInMenu: true,
        redirect: '/exception/404'
    }
]
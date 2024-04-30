const NAVIGATOR = {
    main:[
        {
            name:"Inicio",
            link:"/",
            sub:[]
        },
        {
            name:"La Fundacion",
            link:"/about",
            sub:[
                {
                    name:"Que Hacemos",
                    link:"/"
                },
                {
                    name:"Mision Vision Valores",
                    link:"/about"
                },
                {
                    name:"Nuestra Historia",
                    link:"/works"
                },
                {
                    name:"Consejo de Administración",
                    link:"/projects"
                },
                {
                    name:"Compromiso ODS",
                    link:"/projects"
                }
            ],
        },
        {
            name:"Obras",
            link:"/works",
            sub:[
                {
                    name:"Casa Nazaret",
                    link:"/"
                },
                {
                    name:"Casa Posadas",
                    link:"/works"
                },
                {
                    name:"Hogar San Francisco",
                    link:"/projects"
                },
                {
                    name:"Hospice Santa Teresita",
                    link:"/projects"
                }
            ],
        },
        {
            name:"Proyectos",
            link:"/projects",
            sub:[
                {
                    name:"Retiros Universitarios",
                    link:"/"
                },
                {
                    name:"Formación",
                    link:"/works"
                },
                {
                    name:"Educación",
                    link:"/projects"
                }
            ],
        },
        {
            name:"Eventos",
            link:"/events",
            sub:[
                {
                    name:"Llamando estaba la Casa",
                    link:"/"
                },
                {
                    name:"Carrera +FCJ",
                    link:"/works"
                },
                {
                    name:"Cena Anual",
                    link:"/projects"
                },
                {
                    name:"Otros Eventos",
                    link:"/projects"
                }
            ],
        },
        {
            name:"Sé Parte",
            link:"/participate",
            sub:[
                {
                    name:"Como Donar",
                    link:"/"
                },
                {
                    name:"Socios",
                    link:"/about"
                },
                {
                    name:"Voluntariado Corporativo",
                    link:"/works"
                },
                {
                    name:"Voluntarios Individuales",
                    link:"/projects"
                },
                {
                    name:"Padrinos",
                    link:"/events"
                },
                {
                    name:"Profesionales Solidarios",
                    link:"/participate"
                },
                {
                    name:"Festejos Solidarios",
                    link:"/events"
                },
            ]
        }
    ],
}

export default NAVIGATOR;
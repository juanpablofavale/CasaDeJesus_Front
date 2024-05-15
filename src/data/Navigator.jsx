const NAVIGATOR = {
    main:[
        {
            name:"Inicio",
            link:"/",
        },
        {
            name:"La Fundacion",
            link:"/about",
            sub:[
                {
                    name:"La Fundación",
                    link:"/about/fundacion"
                },
                {
                    name:"Nuestra Historia",
                    link:"/about/historia"
                },
                /*{
                    name:"Nuestra Inspiración",
                    link:"/about/inspiracion"
                },
                {
                    name:"Consejo de Administración",
                    link:"/about/administracion"
                },*/
                {
                    name:"Compromiso ODS",
                    link:"/about/compromiso"
                }
            ],
        },
        {
            name:"Obras",
            sub:[
                {
                    name:"Casa Nazaret",
                    link:"/works/nazaret"
                },
                {
                    name:"Casa Posadas",
                    link:"/works/posadas"
                },
                {
                    name:"Hogar San Francisco",
                    link:"/works/francisco"
                },
                {
                    name:"Hospice Santa Teresita",
                    link:"/works/teresita"
                }
            ],
        },
        /*{
            name:"Proyectos",
            link:"/projects",
            sub:[
                {
                    name:"Retiros Universitarios",
                    link:"/projects/retiros"
                },
                {
                    name:"Formación",
                    link:"/projects/formacion"
                },
                {
                    name:"Educación",
                    link:"/projects/educacion"
                }
            ],
        },*/
        /*{
            name:"Eventos",
            link:"/events",
            sub:[
                {
                    name:"Llamando estaba la Casa",
                    link:"/events/llamando"
                },
                {
                    name:"Carrera +FCJ",
                    link:"/events/carrera"
                },
                {
                    name:"Cena Anual",
                    link:"/events/cena"
                },
                {
                    name:"Otros Eventos",
                    link:"/events/eventos"
                }
            ],
        },*/
        {
            name:"Sé Parte",
            link:"/participate",
            sub:[
                {
                    name:"Como Donar",
                    link:"/participate/donar"
                },
                /*{
                    name:"Socios",
                    link:"/participate/socios"
                },*/
                {
                    name:"Voluntariado Corporativo",
                    link:"/participate/voluntariado"
                },
                {
                    name:"Voluntarios Individuales",
                    link:"/participate/voluntarios"
                },
                {
                    name:"Padrinos",
                    link:"/participate/padrinos"
                },
                {
                    name:"Profesionales Solidarios",
                    link:"/participate/profesionales"
                },
                {
                    name:"Festejos Solidarios",
                    link:"/participate/festejos"
                },
            ]
        }
    ],
}

export default NAVIGATOR;
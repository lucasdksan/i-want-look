export const schema = {
    title: 'Lista de Looks',
    type: 'object',
    properties: {
        list_look: {
            title: 'Lista',
            type: 'array',
            default: [],
            items: {
                title: 'Look',
                type: 'object',
                properties: {
                    active: {
                        title: 'Ativar a URL',
                        type: 'boolean',
                        default: false,
                    },
                    query: {
                        title: 'Rota da URL',
                        type: 'string',
                        default: '',
                    },
                    collection: {
                        title: 'Coleção do Look',
                        type: 'string',
                        default: '',
                    },
                    desktop_image_url: {
                        title: 'Banner Desktop',
                        type: 'string',
                        widget: {
                            'ui:widget': 'image-uploader',
                        },
                        default: '',
                    },
                    mobile_image_url: {
                        title: 'Banner Mobile',
                        type: 'string',
                        widget: {
                            'ui:widget': 'image-uploader',
                        },
                        default: '',
                    },
                    description: {
                        title: 'Descrição do Look',
                        type: 'string',
                        default: '',
                    }
                },
            },
        },
    },
};
import image from './assets/image.png'

export const model = [
    {type: 'title', value: 'Hello World from JS', options: {
        tag: 'h2',
        styles: {
            'background-color': 'red',
            'font-weight': 'bold',
            'text-align': 'center'
        }
    }},
    {type: 'text', value: 'some text',},
    {type: 'columns', value: [
        '13',
        '111',
        '1211',
    ]},
    {type: 'image', value: image}
];

interface Variant {
    name: string;
    types: Type[];
  }
  
  interface Type {
    name: string;
    hexa_code?: string;
  }

const varriants: Variant[] = [
    {
        name:'Color',
        types:[
            {
                name : 'black',
                hexa_code:'#000000',
            },
            {
                name : 'Light Gray',
                hexa_code:'#F2F2F2',
            },
        ]
    },
    {
        name:'Prosessor',
        types:[
            {
                name :'Intel i9 13500K'
            },
            {
                name :'AMD RYZEN 9600G'
            },
            {
                name :'AMD RYZEN 3200G'
            },
            {
                name :'AMD ATHLON 2800'
            },
        ]
    },
    {
        name:'Memory Size',
        types:[
            {
                name:'512 GB'
            },
            {
                name:'1 TB'
            },
            {
                name:'5 TB ULTRA'
            },
        ]
        }
]

export default varriants
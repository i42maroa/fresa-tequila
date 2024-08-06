export const MEMBERS:Member[] =[
    {
        name:"Inma",
        puesto:"Cantante",
        description:"La mejor cantante andaluz en la actualidad. Lo único que le falta es la voz.",
        url:"/images/fans.jpg"
    },
    {
        name:"Alfonso",
        puesto:"Cantante",
        description:"Le apodan la Taylor Swift de Montalbán. ",
        url:"/images/fans.jpg"
    },
    {
        name:"Sheila",
        puesto:"Fotógrafa",
        description:"No permite que ninguna fiesta decaiga. Un poco verde de más últimamente.",
        url:"/images/fans.jpg"
    },
    {
        name:"Enrique",
        puesto:"Máquina de humo",
        description:"Encargado de los efectos especiales. Es una máquina de vapor andante. ",
        url:"/images/fans.jpg"
    },
    {
        name:"Antonio",
        puesto:"Web",
        description:"Jason Statham de la informática. No deja ningún cabo suelto.",
        url:"/images/fans.jpg"
    },
    {
        name:"Alejandro",
        puesto:"Manager/Publicidad",
        description:"Un completo bastinazo. El florentino Pérez de Cádiz.",
        url:"/images/fans.jpg"
    },
    
    
    {
        name:"Andrea",
        puesto:"Cáterin y bebidas",
        description:"Catadora profesional de cervezas. No permite que el equipo tome Cruzcampo.",
        url:"/images/fans.jpg"
    },
    
    {
        name:"Laura",
        puesto:"Fan n1",
        description:"Se encuentra a cargo de la mayor cuenta de fans aferrimos de fresa Tequila. Con una orden",
        url:"/images/fans.jpg"
    },
    {
        name:"Anabel",
        puesto:"Fan no1",
        description:"",
        url:"/images/fans.jpg"
    },
    {
        name:"Cristina",
        puesto:"Fan no1",
        description:"",
        url:"/images/fans.jpg"
    },
]



export interface Member {
    name:string;
    puesto:string;
    description:string;
    url:string;
}
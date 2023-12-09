 
export interface Nota {
    author : string;
    imageAlt: string;
    imageAuthor : string;
    imageNote: string;
    lead: string;
    marquee: string;
    title: string;
    subTitle: string;
    type: ObjectCss;
    urlNote: string; 
} 


export interface ObjectCss {
    article: string;
    body: string;
    mediaContainer: string;
    img: string;
    marque?: string;
    author: string;
} 

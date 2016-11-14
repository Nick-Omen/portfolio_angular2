export class Portfolio {
    id: number;
    title: string;
    slug: string;
    short_description: string;
    thumbnail: string;
    logo: string;
    work_types: Array<string>;
    languages: Array<string>;
    technologies: Array<string>;
}

export class PortfolioDetails {
    id: number;
    title: string;
    description: string;
    image: string;
    logo: string;
    url: string;
    work_types: Array<string>;
    languages: Array<string>;
    technologies: Array<string>;
}

export interface EducationItem {
    name: string;
    year: number;
    company: string;
    address: string;
}

export const education: EducationItem[] = [
    {
        name: "Certification Salesforce B2C Commerce Developer",
        year: 2023,
        company: "Capgemini",
        address: "Paris",
    },
    {
        name: "Reconversion professionnelle",
        year: 2019,
        company: "Agility Factory",
        address: "Paris",
    },
    {
        name: "Doctorat de Biothérapie Cellulaire et Tissulaire",
        year: 2018,
        company: "IRSN",
        address: "Fontenay-Aux-Roses",
    },
];

import { LucideIcon } from "lucide-react";

export type TNavLink = {
	name: string;
	path: string;
	icon: LucideIcon;
	disabled?: boolean;
};

export type THomepageHero = {
	title: string;
	text: string;
	cta: string;
	img: string;
};

export type THomepageAbout = {
	title: string;
	text: string;
	ourValues: {
		icon: LucideIcon;
		title: string;
		text: string;
	}[];
};

export type UserType ={
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    img: string;  
}

export type TUserPage = {
	data: UserType[];
};

export type UserCardProps ={
    user: UserType; 
}

export type UserInfoProps = {
    username: string;
    email: string;
    phone: string;
    address: {
      suite: string;
      street: string;
      city: string;
      zipcode: string;
    };
    website: string;
  }
  
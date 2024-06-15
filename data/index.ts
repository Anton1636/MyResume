import { link } from 'fs'

export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Testimonials', link: '#testimonials' },
	{ name: 'Contact', link: '#contact' },
]

export const gridItems = [
	{
		id: 1,
		title: 'I prioritize client collaboration, fostering open communication ',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'Currently building a blockchain based projects',
		description: 'The Inside Scoop',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
]

export const projects = [
	{
		id: 1,
		title: 'Medical Records Storage',
		des: 'A medical record system powered by blockchain is a a groundbreaking solution that securely stores and manages patient health information.',
		img: '/p1.png',
		iconLists: [
			'/re.svg',
			'/tail.svg',
			'/js.png',
			'/hardhat.jfif',
			'/eth.jfif',
		],
		link: '/https://github.com/Anton1636/Medical-Records-Storage',
	},
	{
		id: 2,
		title: 'Crowd Funding',
		des: 'These are platform where people or companies can support other people’s ideas using blockchain',
		img: '/p2.png',
		iconLists: [
			'/next.svg',
			'/tail.svg',
			'/js.png',
			'/hardhat.jfif',
			'/eth.jfif',
		],
		link: '/https://github.com/Anton1636/Crowd-Funding',
	},
]

export const testimonials = [
	{
		quote: 'Lorem ipsum dolor sit amet, consectetur sed',
		name: 'Test',
		title: 'Test',
	},
	{
		quote: 'Lorem ipsum dolor sit amet, consectetur sed',
		name: 'Test',
		title: 'Test',
	},
	{
		quote: 'Lorem ipsum dolor sit amet, consectetur sed',
		name: 'Test',
		title: 'Test',
	},
	{
		quote: 'Lorem ipsum dolor sit amet, consectetur sed',
		name: 'Test',
		title: 'Test',
	},
	{
		quote: 'Lorem ipsum dolor sit amet, consectetur sed',
		name: 'Test',
		title: 'Test',
	},
]

export const workExperience = [
	{
		id: 1,
		title: 'Here will be my work experience',
		desc: '',
		thumbnail: '/exp1.svg',
	},
]

export const socialMedia = [
	{
		id: 1,
		img: '/git.svg',
		link: 'https://github.com/Anton1636',
	},
	{
		id: 2,
		img: '/twit.svg',
		link: 'https://x.com/ProkopetsAnton',
	},
	{
		id: 3,
		img: '/link.svg',
		link: 'https://www.linkedin.com/in/anton-prokopets-463b562b7/',
	},
]

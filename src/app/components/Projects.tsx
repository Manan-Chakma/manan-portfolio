'use client'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';

import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface personalProject {
    id: number,
    name: string,
    description: string,
    projectUrl: string,
    startDate: string,
    endDate: string,
    totalDuration: string,
    skills: string,
    thumbnail: string,
    learnMore: string,
}
const personalProjects = [
    {
        id: 1,
        name: "Personal Portfolio using Next.js and Tailwind CSS",
        description: 'A next.js and tailwind persoanl website with academic and professional details.',
        projectUrl: 'https://github.com/Manan-Chakma/manan-portfolio',
        startDate: 'Feb 2026',
        endDate: 'Present',
        totalDuration: '',
        skills: 'Next.js, Tailwind CSS',
        thumbnail: '/projpp.png',
        learnMore: '',
    },
    {
        id: 2,
        name: "Register and Login Endpoint using Flask",
        description: 'A flask application with /register and /login api endpoint..',
        projectUrl: 'https://github.com/Manan-Chakma/flask-jwt-authentication/blob/main/app.py',
        startDate: 'Oct 2021',
        endDate: 'Oct 2021',
        totalDuration: '1 w',
        skills: 'Flask, MySQL, JWT Authentication',
        thumbnail: '/projflaskjwt.png',
        learnMore: '',
    },
    {
        id: 3,
        name: "Getting Started with Travis CI Docker Nginx and React App",
        description: 'Integrating continuous integration (Travis CI) and dockerizing a react application.',
        projectUrl: 'https://github.com/Manan-Chakma/react-docker-nginx',
        startDate: 'Aug 2021',
        endDate: 'Sep 2021',
        totalDuration: '1 mo',
        skills: 'Docker, CI (Continuous Integration)',
        thumbnail: '/projci.png',
        learnMore: '',
    },
    {
        id: 4,
        name: "Fantasy Freakzz KUET",
        description: 'Six person owns a team and compete against six others to make table top.',
        projectUrl: 'https://github.com/Manan-Chakma/FFK_KUET',
        startDate: 'Jul 2020',
        endDate: 'Jul 2020',
        totalDuration: '1 mo',
        skills: 'Android, Java',
        thumbnail: '/projffk.png',
        learnMore: '',
    }
]

export function Projects() {

    const handleClick = (p: personalProject) => {
        window.open(p.projectUrl, '_blank');
    };
    return (
        <section id='projects' className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl mb-12 text-center text-gray-900">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
                    {personalProjects.map((p: personalProject) => (
                        <Card key={p.id}>
                            <CardActionArea onClick={() => handleClick(p)}>
                                <CardMedia
                                    sx={{ height: 300 }}
                                    image={p.thumbnail}
                                    title="thumbnail"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {p.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                        {p.description}
                                    </Typography>
                                    <br />
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        <b>Skills:</b> {p.skills}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small"><a href={p.projectUrl} target="_blank">Learn More</a></Button>
                            </CardActions>

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
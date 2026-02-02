const experiences = [
    {
        title: "Security Risk Officer",
        employmentType: 'Part-Time',
        company: 'WA Police Force',
        companyType: 'Government Agency',
        companyUrl: 'https://www.wa.gov.au/organisation/western-australia-police-force',
        startDate: 'Jul 2025',
        endDate: 'Nov 2025',
        totalDuration: '15 Weeks',
        location: 'Perth, Western Australia',
        skills: 'C#, Powershell, WPF Development',
        learnMore: '',
        photos: [],
        responsibilities: [
            'Developed, debugged and tested a compliance tool in WPF framework following MVVM architecture',
            'Gained hands-on experience in compliance activities, software requirement analysis and Microsoft Entra',
            'Prepared Security Risk Assessment report aligning Essential Eight Maturity Level 2.'
        ],

    },
    {
        title: "Teacher",
        employmentType: 'Casual',
        company: 'AICODE Australia',
        companyUrl: 'https://www.aicodeaustralia.com.au/',
        companyType: 'STEM Education',
        startDate: 'Nov 2023',
        endDate: 'Jun 2025',
        totalDuration: '1 yr 8 mo',
        location: 'Perth, Western Australia',
        skills: 'communication, teaching, time management, adaptability',
        learnMore: '',
        photos: [],
        responsibilities: [
            'Delivered engaging STEM contents to students across Year 3 to Year 12, fostering problem-solving and computational thinking skills.',
            'Taught block-based programming using devices like Sphero BOLT, LiteBee Kids Drone, RoboMaster TT, Sphero RVR, Microbit, and RomoMaster EP as part of an After-School Program, Holiday Program and School Incursions.',
            'Prepared detailed student worksheets to support lesson plan.',
            'Ensured safety using equipment like goggles and guide to handle devices with care.',
            'Served as a judge at various competition events, assessing participants on technical proficiency, creativity, and teamwork.'
        ],

    },
    {
        title: "Software Engineer",
        employmentType: 'Full-Time',
        company: 'Brain Station 23',
        companyType: 'Software Company',
        companyUrl: 'https://brainstation-23.com/',
        startDate: 'Jan 2022',
        endDate: 'Jun 2023',
        totalDuration: '1 yr 6 mo',
        location: 'Dhaka, Bangladesh',
        skills: 'Odoo, Python, JavaScript, Git, PostgreSQL, standups, Agile methodologies',
        learnMore: '',
        photos: [],
        responsibilities: [
            'Contributed to a complex automated backend operation of Odoo ERP, integrating Prestashop and Mirakl Online Marketplace APIs for seamless product management across 8+ countries, supporting multi-currency reports and invoicing.',
            'Achieved a 2 times improvement in inventory operations by refactoring code and optimizing database queries.',
            'Experienced with multiple API protocols, including REST, JSON-RPC, and SOAP.',
            'Customized various modules including Sales, Purchase, Inventory, POS and Invoice.',
            'Applied best practices, clean code, SOLID principles and code documentation.',
            'Published of 3 apps in Odoo Apps Store.',
        ],

    },
    {
        title: "Associate Software Engineer",
        employmentType: 'Full-Time',
        company: 'Apsis Solutions Ltd.',
        companyType: 'Software Company',
        companyUrl: 'https://apsissolutions.com/',
        startDate: 'Sep 2020',
        endDate: 'Dec 2021',
        totalDuration: '1 yr 4 mo',
        location: 'Dhaka, Bangladesh',
        skills: 'Apache Cordova, jQuery, JavaScript, Python, Flask, PHP, Codeigniter',
        learnMore: '',
        photos: [],
        responsibilities: [
            'Assisted the team in working with diverse technologies, including Apache Cordova, Flask, CodeIgniter, and Odoo.',
            'Implemented interactive UI with CSS and jQuery to enhance user experiences.',
            'Analysed pytesseract and EasyOCR performance in Flask backend where pytesseract response was faster but EasyOCR outperforms in quality output.',
            'Developed and maintained custom modules on Odoo’s cloud server (odoo.sh).'
        ],

    }

];

export function Experience() {
    return (
        <section id="experience" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl mb-12 text-center text-gray-900">Experience</h2>
            </div>
        </section>
    )
}
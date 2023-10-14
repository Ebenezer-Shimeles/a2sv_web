
const tests = [
    {
        now: `Google is a great place to work. You will work with the brightest minds in the world and find yourself moving forward. Their culture is great and inclusive, especially their free food!`, 
        change: `
        I believe I would have not made it to Google if not for A2SV. In fact, I would not have got this far if it wasn't for A2SV. I don't even think we would have such type of opportunities if it was not for this organization. Previously, I used to think working at FAANG was impossible for us but A2SV changed my mindset. Now, we know that it is possible to work anywhere as long as one works hard and utilizes opportunities.`, 
        img: 'https://res.cloudinary.com/eskalate/image/upload/f_auto,q_auto/v1/a2sv/success-stories/biruk_a', 
        loc: 'Google - Mountain View, CA, USA ',
        name : 'Biruk Ayalew ',
        pos: 'Software Engineering Intern ',
        
        exp: 'I heard about Africa to Silicon Valley from my friends and I was excited to join. Before joining A2SV I dreamt about solving real-world problems and attaining something that I could focus on and make myself better from it. At that time, it is safe to say, I knew very little about data structure and algorithms. It was because of the A2SV program that I got comfortable with algorithms. From the program, students also learn about improving communication skills and being confident besides acquiring problem-solving skills.'
    },
    {
        now: `
        I enjoyed my time at Google as an intern. I got to work and learn from very disciplined and experienced engineers.`,
        change: `When I proved successful for the internship at Google, I remember being excited to spend the next 3 months there because of the positive culture, atmosphere, and all the perks. Without A2SV, I probably would not have ended up at Google.`,
        img: 'https://res.cloudinary.com/eskalate/image/upload/f_auto,q_auto/v1/a2sv/success-stories/kidus', 
        loc: 'Google - London, UK  ',
        name : 'Kidus Yoseph ',
        pos: 'Software Engineering Intern',
        exp: `By being a part of A2SV, I got the chance to work and collaborate on real-world problems and gained more value through preparing for interviews with big tech companies. I also made really good friends.`
        
    },
    {
        now: `I am currently working on a very unique role in software engineering with some customers facing interactions. I am learning so much every day and acquiring a lot of skills. I have found the culture in Palantir to be amazing. Everyone is very smart and nice. Getting more work opportunities and quality education for more people in Africa will help us solve a lot of our problems, and I would like to contribute to making that happen.`,
        change: `I was really excited when I got my internship at Palantir. I think A2SV played a big role in getting me this opportunity by preparing me for my interviews, giving me experience by working on projects, and getting me connected with the company.`,
        img: 'https://res.cloudinary.com/eskalate/image/upload/f_auto,q_auto/v1/a2sv/success-stories/eden', 
        loc: 'Palantir - London, UK  ',
        name : 'Lydia Gashawtena ',
        pos: 'Forward Deployed Engineering Intern  ',
        exp: `All I thought about before joining Africa to Silicon Valley was to complete university with good grades, continue my Masters and PhD soon after, and find a good influential job after that. I was excited to join A2SV but did not believe that what we achieved was possible.`        
    },
    {
        now: `The environment at Google is challenging yet comfortable, full of learning, encouraging, and inspiring. I hope to turn my experiences and learnings into a tool I can use to boost the already fast-paced growth of Africa.`,
        change: `Getting a place at Google made me ecstatic! I was so excited to embark on this new wonderful journey. I am proud and thankful for A2SV. I definitely would not have made it without them. A2SV made me believe in what I thought was impossible. It taught me priceless lessons and skills.`,
     
        img: 'https://res.cloudinary.com/eskalate/image/upload/f_auto,q_auto/v1/a2sv/success-stories/lydia', 
        loc: 'Google - London, UK ',
        name : 'Lydia Gashawtena ',
        pos: 'Full-time Software Engineer  ',
        exp: `All I thought about before joining Africa to Silicon Valley was to complete university with good grades, continue my Masters and PhD soon after, and find a good influential job after that. I was excited to join A2SV but did not believe that what we achieved was possible.`        
    },
    {
        now: `Google is a great place to work. You will work with the brightest minds in the world and find yourself moving forward. Their culture is great and inclusive, especially their free food!`, 
        change: `
        I believe I would have not made it to Google if not for A2SV. In fact, I would not have got this far if it wasn't for A2SV. I don't even think we would have such type of opportunities if it was not for this organization. Previously, I used to think working at FAANG was impossible for us but A2SV changed my mindset. Now, we know that it is possible to work anywhere as long as one works hard and utilizes opportunities.`, 
        img: 'https://res.cloudinary.com/eskalate/image/upload/f_auto,q_auto/v1/a2sv/success-stories/yisehak', 
        loc: 'Google - Mountain View, CA, USA ',
        name : 'Yisehak Bogale ',
        pos: 'Full-time Software Engineer ',
        
        exp: 'I heard about Africa to Silicon Valley from my friends and I was excited to join. Before joining A2SV I dreamt about solving real-world problems and attaining something that I could focus on and make myself better from it. At that time, it is safe to say, I knew very little about data structure and algorithms. It was because of the A2SV program that I got comfortable with algorithms. From the program, students also learn about improving communication skills and being confident besides acquiring problem-solving skills.'
    },
    {
        now: `Work is challenging, but my teammates are friendly and willing to help.`,
        change: `It felt really good finding out I got the job at Databricks. I had put a lot of effort into this and had to wait patiently for it to happen, but it was worth it in the end. It was all because of A2SV. I never imagined I would be able to accomplish something like this soon after finishing my undergraduate studies at AAU in Ethiopia. I always assumed that I had to graduate from a well-known university in the United States or Europe.`
        ,img: `https://res.cloudinary.com/eskalate/image/upload/f_auto,q_auto/v1/a2sv/success-stories/beimnet_z`,
        loc: '        Databricks - Amsterdam, Netherlands ',
        name : 'Beimnet Zewdu ',
        pos: 'Full-time Software Engineer ',
        
        exp: 'I heard about Africa to Silicon Valley from my friends and I was excited to join. Before joining A2SV I dreamt about solving real-world problems and attaining something that I could focus on and make myself better from it. At that time, it is safe to say, I knew very little about data structure and algorithms. It was because of the A2SV program that I got comfortable with algorithms. From the program, students also learn about improving communication skills and being confident besides acquiring problem-solving skills.'
    },
    {
        now: `am a software engineer on a project called flood forecasting: https://youtu.be/Mz0ikfuE_z0 My teammates were very welcoming and happy to help. The best thing about Google is there is something new to learn every day. I would like to contribute to Africa by mitigating natural disasters using AI/machine learning. If we know ahead of time, that some natural disasters can happen, we can minimize the damage they can cause. One good example is Google's flood forecasting initiative. Check it out: shorturl.at/diDM6`
        ,change: `I was super excited when I got the job opportunity at Google. I don't think I would have made it without A2SV. A2SV helped me by providing well-structured coursework to pass technical and behavioral interviews. The coursework included competitive programming, mock interviews, accent reduction, communication skills, etc. All of these are very essential to crack interviews at tech companies.`, 
        img: 'https://res.cloudinary.com/eskalate/image/upload/f_auto,q_auto/v1/a2sv/success-stories/tadele', 
        loc: 'Google - Accra, Ghana  ',
        name : 'Tadele Yidenekachew',
        pos: 'Google - Accra, Ghana  ',
        
        exp: ` had a dream to get a job as a full-time software engineer in Addis Ababa. The A2SV program was a great experience. The coursework was very structured. A2SVians are awesome! We had trips, and fun activities during the program. In short, the A2SV organization creates the best teams.`
    },
    
    
]
const getAllTest = ()=>{
    return tests
}
export default getAllTest
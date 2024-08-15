const profile_pictures = [
    '/images/pfp1.png',
    '/images/pfp2.png',
    '/images/pfp3.png',
    '/images/pfp4.png',
    '/images/pfp5.png'
];

const messages = [
{
    profile: profile_pictures[0],
    text: "Hi there!",
    user: "Amando",
    added: new Date()
},
{
    profile: profile_pictures[2],
    text: "Hello World!",
    user: "Charles",
    added: new Date()
}
];

module.exports = { messages, profile_pictures };
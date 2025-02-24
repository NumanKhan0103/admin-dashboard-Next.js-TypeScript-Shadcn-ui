import { Post } from "@/interfaces/postInterface";


const posts : Post[] =   [
    {
        "id": 1,
        "title": "The Future of Artificial Intelligence",
        "body": "Artificial Intelligence is transforming industries across the globe. From healthcare to finance, AI is making processes faster and more efficient.",
        "author": "John Doe",
        "date": "2023-10-01",
        "comments": [
            {
                "id": 1,
                "text": "Great article! AI is indeed the future.",
                "username": "Alice"
            },
            {
                "id": 2,
                "text": "I work in healthcare, and AI is already making a huge difference.",
                "username": "Bob"
            },
            {
                "id": 3,
                "text": "What about the ethical concerns?",
                "username": "Charlie"
            }
        ]
    },
    {
        "id": 2,
        "title": "Top 10 Programming Languages in 2023",
        "body": "Python continues to dominate the programming world, but newer languages like Rust and Go are gaining traction.",
        "author": "Jane Smith",
        "date": "2023-10-02",
        "comments": [
            {
                "id": 1,
                "text": "I love Python! It's so versatile.",
                "username": "Dave"
            },
            {
                "id": 2,
                "text": "Rust is amazing for system programming.",
                "username": "Eve"
            },
            {
                "id": 3,
                "text": "What about JavaScript? It's still everywhere.",
                "username": "Frank"
            }
        ]
    },
    {
        "id": 3,
        "title": "The Rise of Remote Work",
        "body": "Remote work has become the norm for many companies. This article explores the benefits and challenges of working from home.",
        "author": "Emily Brown",
        "date": "2023-10-03",
        "comments": [
            {
                "id": 1,
                "text": "I've been working remotely for 2 years now. It's great!",
                "username": "Grace"
            },
            {
                "id": 2,
                "text": "The biggest challenge is staying motivated.",
                "username": "Hank"
            },
            {
                "id": 3,
                "text": "I miss the office culture though.",
                "username": "Ivy"
            }
        ]
    },
    {
        "id": 4,
        "title": "Sustainable Living: Tips for a Greener Future",
        "body": "Sustainability is more important than ever. Here are some practical tips to reduce your carbon footprint.",
        "author": "Michael Green",
        "date": "2023-10-04",
        "comments": [
            {
                "id": 1,
                "text": "I started composting recently. It's easier than I thought!",
                "username": "Jack"
            },
            {
                "id": 2,
                "text": "What about electric cars? Are they really sustainable?",
                "username": "Karen"
            },
            {
                "id": 3,
                "text": "Great tips! I'm going to try them out.",
                "username": "Liam"
            }
        ]
    },
    {
        "id": 5,
        "title": "The Impact of Social Media on Mental Health",
        "body": "Social media has both positive and negative effects on mental health. This article dives into the research and offers advice.",
        "author": "Sarah Johnson",
        "date": "2023-10-05",
        "comments": [
            {
                "id": 1,
                "text": "I deleted Instagram last month, and I feel so much better.",
                "username": "Mia"
            },
            {
                "id": 2,
                "text": "But social media also helps me stay connected with friends.",
                "username": "Noah"
            },
            {
                "id": 3,
                "text": "It's all about balance, I think.",
                "username": "Olivia"
            }
        ]
    },
    {
        "id": 6,
        "title": "Exploring the Wonders of Space",
        "body": "From black holes to distant galaxies, space is full of mysteries. This article explores some of the most fascinating discoveries.",
        "author": "David Williams",
        "date": "2023-10-06",
        "comments": [
            {
                "id": 1,
                "text": "I love space! The James Webb Telescope is amazing.",
                "username": "Peter"
            },
            {
                "id": 2,
                "text": "Do you think we'll ever find alien life?",
                "username": "Quinn"
            },
            {
                "id": 3,
                "text": "Space is so vast and mysterious. It's humbling.",
                "username": "Rachel"
            }
        ]
    },
    {
        "id": 7,
        "title": "The Art of Productivity",
        "body": "Being productive isn't about working harder—it's about working smarter. Here are some tips to boost your productivity.",
        "author": "Laura Davis",
        "date": "2023-10-07",
        "comments": [
            {
                "id": 1,
                "text": "I use the Potoroo technique, and it works wonders!",
                "username": "Sam"
            },
            {
                "id": 2,
                "text": "I struggle with procrastination. Any tips?",
                "username": "Tina"
            },
            {
                "id": 3,
                "text": "Great article! I'm going to try these strategies.",
                "username": "Uma"
            }
        ]
    },
    {
        "id": 8,
        "title": "The Future of Electric Vehicles",
        "body": "Electric vehicles are becoming more popular, but what does the future hold? This article explores the latest trends and challenges.",
        "author": "Chris Evans",
        "date": "2023-10-08",
        "comments": [
            {
                "id": 1,
                "text": "I just bought an electric car, and I love it!",
                "username": "Victor"
            },
            {
                "id": 2,
                "text": "What about the charging infrastructure? It's still lacking.",
                "username": "Wendy"
            },
            {
                "id": 3,
                "text": "I'm excited for the future of EVs!",
                "username": "Bander"
            }
        ]
    },
    {
        "id": 9,
        "title": "The Benefits of Meditation",
        "body": "Meditation has been proven to reduce stress and improve mental clarity. Here's how you can get started.",
        "author": "Sophia Martinez",
        "date": "2023-10-09",
        "comments": [
            {
                "id": 1,
                "text": "I meditate every morning, and it's life-changing.",
                "username": "Yard"
            },
            {
                "id": 2,
                "text": "I find it hard to quiet my mind. Any advice?",
                "username": "Zach"
            },
            {
                "id": 3,
                "text": "Great article! I'm going to give it a try.",
                "username": "Amy"
            }
        ]
    },
    {
        "id": 10,
        "title": "The Evolution of E-Commerce",
        "body": "E-commerce has come a long way since the early days of the internet. This article explores its evolution and future trends.",
        "author": "Daniel Wilson",
        "date": "2023-10-10",
        "comments": [
            {
                "id": 1,
                "text": "I run an online store, and it's amazing how much has changed.",
                "username": "Ben"
            },
            {
                "id": 2,
                "text": "What about the impact on small businesses?",
                "username": "Cara"
            },
            {
                "id": 3,
                "text": "Great insights! E-commerce is the future.",
                "username": "Dylan"
            }
        ]
    }
];


export default posts;
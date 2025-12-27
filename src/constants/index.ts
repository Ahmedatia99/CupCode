export interface NavigationItem {
  id: string;
  title: string;
  url: string;
}
export const navigation:NavigationItem[] = [
  {
    id: "0",
    title: "Home",
    url: "#",
  },
  {
    id: "1",
    title: "Courses",
    url: "#courses",
  },
  {
    id: "2",
    title: "AboutUs",
    url: "#about",
  },
];
export interface IconItem {
  id: string;
  src: string;
  alt: string;
  left:number,
  top:number
}
export const icons:IconItem[] = [
  {
    id: "0",
    src: "/images/coding.png",
    alt: "coding",
    left: 60,
    top: 10,
  },
  {
    id: "1",
    src: "/images/dollar.png",
    alt: "dollar",
    left: 35,
    top: 5,
  },
  {
    id: "2",
    src: "/images/light.png",
    alt: "light",
    left: 75,
    top: 25,
  },
  {
    id: "3",
    src: "/images/p-s.png",
    alt: "problem solving",
    left: 50,
    top: 20,
  },
];
export interface ObjectivesItem {
  id: string;
  title: string;
  info: string;
}
export const objectives:ObjectivesItem[] = [
  {
    id: "0",
    title: "Free Trials",
    info: " ",
  },
  {
    id: "1",
    title: "Lifetime Access",
    info: "limited time offer for free trials.",
  },
  {
    id: "2",
    title: "Best Teachers",
    info: "Best instructors around each course.",
  },
  {
    id: "3",
    title: "24/7 Support",
    info: "support team ready to help you anytime.",
  },
];
export interface FeatureItem {
  id:string;
  title:string;
  color:string
}
export const feature:FeatureItem[] = [
  { id: "0", title: "Expert trainers", color: "#ef5c72" },
  { id: "1", title: "Online learning", color: "#7054e6" },
  { id: "2", title: "Lifetime access", color: "#f89321" },
  { id: "3", title: "Great results", color: "#00c7c4" },
];
export interface QuestionsItem {
  id:number;
  categoryId:number;
  ques:string;
  ans:string
}
export const questions:QuestionsItem[] = [
  {
    id: 0,
    categoryId: 1,
    ques: "What Time For Classes ?",
    ans: "classes take maximum 3 hours per 3 days in week",
  },
  {
    id: 1,
    categoryId: 2,
    ques: "what is the refund policy ?",
    ans: "you can request a refund within 14 days of purchase",
  },
  {
    id: 2,
    categoryId: 2,
    ques: "What is the payment method ?",
    ans: "we accept credit cards, debit cards, and PayPal",
  },
  {
    id: 3,
    categoryId: 3,
    ques: "What is the course duration ?",
    ans: "the course duration is 3 months",
  },
  {
    id: 4,
    categoryId: 3,
    ques: "what is the course content ?",
    ans: "the course content includes video lectures, assignments, and quizzes",
  },
  {
    id: 5,
    categoryId: 3,
    ques: "Do I get a certificate after completion ?",
    ans: "yes, you will receive a certificate upon successful completion of the course",
  },
];
export interface CommentItem {
  id: string;
  name:string;
  comment:string;
  img:string;
  rating: number; 
}
export const comments:CommentItem[] = [
  {
    id: "0",
    name: "Mahmoud Salah",
    comment: "they are providing me with the best experience ever.",
    img: "/images/hawara.jpg",
    rating:5
  },
  {
    id: "1",
    name: "Mohammed Hassan",
    comment: "I am loving the courses and the content is very useful.",
    img: "/images/hawara.jpg",
    rating:4
  },
  {
    id: "2",
    name: "Mohammed Abdelghany",
    comment: "Thanks Hawara, you are amazing and most amazing platform to learn new skills.",
    img: "/images/hawara.jpg",
    rating:5
  },
  {
    id: "3",
    name: "Ahmed Atia",
    comment: "Highly recommend to everyone looking to learn new skills.",
    img: "/images/hawara.jpg",
    rating:4
  },
];
export interface mainQuestionItem{
  id: number;
  heading: string;
  info:string;
}
export const mainQuestion:mainQuestionItem[] = [
  {
    id: 1,
    heading: "Policies",
    info: "Many desktop publishing packages and web page editors now use",
  },
  {
    id: 2,
    heading: "Privacy Policy",
    info: "Many desktop publishing packages and web page editors now use",
  },
  {
    id: 3,
    heading: "Privacy Policy",
    info: "Many desktop publishing packages and web page editors now use",
  },
];
export interface CourseItem{
  id:number;
  level: string,
  discount: string,
  mainPrice: string,
  duration: string,
  session: string,
  hours: string,
  preRequests: string,
  contentTitle: string,
}
export const courses = [
  {
    id: 0,
    level: "Beginner",
    discount: "3500",
    mainPrice: "3000",
    duration: "3",
    session: "22",
    hours: "70",
    preRequests: "No prior experience required",
    contentTitle: "LEVEL 1 Technology Around Us",
  },
  {
    id: 1,
    level: "Advanced",
    discount: "3500",
    mainPrice: "3000",
    duration: "3",
    session: "22",
    hours: "70",
    preRequests: "Successful interview for accepting",
    contentTitle: "LEVEL 1 Technology Around Us",
  },
  {
    id: 2,
    level: "Expert",
    discount: "3500",
    mainPrice: "3000",
    duration: "3",
    session: "22",
    hours: "70",
    preRequests: "Successful interview for accepting",
    contentTitle: "LEVEL 1 Technology Around Us",
  },
];

export const contentCourses:string[][] = [
  [
    "C++ Basics & Data Types",
    "Operators & Conditional Statements",
    "Loops & Functions",
    "Arrays, Strings & Pointers",
    "Recursion & Problem-Solving Techniques",
    "Dynamic Memory Allocation",
    "Basic Data Structures",
  ],
  [
    "C++ Basics & Data Types",
    "Operators & Conditional Statements",
    "Loops & Functions",
    "Arrays, Strings & Pointers",
    "Recursion & Problem-Solving Techniques",
    "Dynamic Memory Allocation",
    "Basic Data Structures",
  ],
  [
    "C++ Basics & Data Types",
    "Operators & Conditional Statements",
    "Loops & Functions",
    "Arrays, Strings & Pointers",
    "Recursion & Problem-Solving Techniques",
    "Dynamic Memory Allocation",
    "Basic Data Structures",
  ],
];

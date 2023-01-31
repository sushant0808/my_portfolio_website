

import calculator_project from './assets/calculator_project.png';
import charity_project from './assets/charity_project.png';
import my_task_project from './assets/my_task_project.png';
import add_to_cart from './assets/add_to_cart_project.png';
import gym_project from './assets/gym_project.png';
import expense_project from './assets/expense-project.png'

export const projectType = {
    front: 'front',
    back: 'back',
    full: 'full'
}

const { front, back, full } = projectType
export const data = [
    {
        projectName: 'React Calculator',
        projectDesc: 'Created a basic calculator for myself. Used useReducer to handle calculator operations, results,and operand values',
        projectType: front,
        projectLink: 'https://aesthetic-taiyaki-f46dc7.netlify.app/',
        githubLink: 'https://github.com/sushant0808/react_calculator.git',
        projectImage: calculator_project
    },
    {
        projectName: 'Charity website',
        projectDesc: 'Created a responsive charity website using Html, Css and Bootstrap',
        projectType: front,
        projectLink: 'https://curious-cendol-35544f.netlify.app/',
        githubLink: 'https://github.com/sushant0808/charity-website.git',
        projectImage: charity_project
    },
    {
        projectName: 'Goals Manager Website',
        projectDesc: 'User can add, delete, update, goals.User can sort goals alphabetically ie A-Z or Z-A.User can filter goals by complete/incomplete.Used redux for global state management, react bootstrap for design, react icons for icons.Used Nodejs and express for backend, jwt tokens and cookies for authentication.MongoDb database for storing data. Displayed proper success/error messages',
        projectType: full,
        projectLink: 'https://goalsmanager.onrender.com',
        githubLink: 'https://github.com/sushant0808/goalsmanager-frontend.git',
        projectImage: my_task_project
    },
    {
        projectName: 'React Add To Cart',
        projectDesc: 'Add product to cart.Remove product from cart.View and edit cart.Search product in the search bar, provided basic auto suggestion of products.Can click on individual product to view more info about the product',
        projectType: front,
        projectLink: 'https://chic-moxie-f05aef.netlify.app/products',
        githubLink: 'https://github.com/sushant0808/add-to-cart-using-react.git',
        projectImage: add_to_cart
    },
    {
        projectName: 'React Expense Tracker',
        projectDesc: 'Created an Expense Tracker which keeps track of your day to day income and expenses',
        projectType: front,
        projectLink: 'https://heroic-crumble-c6592e.netlify.app/',
        githubLink: 'https://github.com/sushant0808/React-expense-tracker',
        projectImage: expense_project
    },
    // {
    //     projectName: 'Nextjs Pizza website',
    //     projectDesc: 'Technologies - React, Nextjs, Paypal library for payment, Redux toolkit.User can view product information by clicking on it, add product to cart, see order details and get order status.Used paypal library for managing online payments, also implemented Cash on delivery option.Admin can login, add new products, delete products, change order status',
    //     projectType: front,
    //     projectLink: 'https://github.com/sushant0808/Nextjs-pizza-website.git',
    //     githubLink: 'https://github.com/sushant0808/Nextjs-pizza-website.git',
    //     projectImage: ''
    // },
    {
        projectName: 'Fitness center website',
        projectDesc: 'I have created a fitness center website using html,css and bootstrap. Used different bootstrap components like carousel, accordion, added amazing hover effects on different html elements',
        projectType: front,
        projectLink: 'https://aquamarine-pothos-a3e77d.netlify.app/',
        githubLink: 'https://github.com/sushant0808/bootstrap_gym_website.git',
        projectImage: gym_project
    },
    // {
    //     projectName: '',
    //     projectDesc: '',
    //     projectType: '',
    //     projectLink: '',
    //     githubLink: '',
    // },
    // {
    //     projectName: '',
    //     projectDesc: '',
    //     projectType: '',
    //     projectLink: '',
    //     githubLink: '',
    // },
]
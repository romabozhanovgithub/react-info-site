// const h1 = document.createElement('h1');
// h1.textContent = 'Hello World!';
// h1.className = 'title';
// document.getElementById('root').appendChild(h1);
// console.log(h1);

// JSX
// const element = <h1 className="title">Hello World!</h1>;
// console.log(element);
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

const navbar = (
    <nav>
        <h1>Title</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById('root')
);

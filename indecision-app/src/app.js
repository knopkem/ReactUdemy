
// JSX
const template = (
    <div
        ><h1>Indecision App</h1>
        <p>some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
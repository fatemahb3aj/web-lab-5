File Organization:

web lab-5/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Product.jsx
│   │   └── ProductList.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json


Challenges Faced

1.Managing component hierarchy and passing props correctly down through productlist to individual product components without breaking data flow.

2.Understanding and implementing component composition using props children inside card jsx while keeping it completely generic and independent of what it renders.

3.Managing controlled input state synchronously alongside boolean conditional rendering (show products) to toggle UI visibilty cleany without manipulating the DOM directly.

4.Dynamically mapping over static product data using map while ensuring stable and unique key props were assigned properly.

5.Ensuring strict adherence to assignment constraints by removing any forbidden featurse like use effects and etc. and keeping state purely within the parent component.

6.Configuring Git version control properly managing project commit history and ensuring build directories like node modules were completely excluded via git ignore.
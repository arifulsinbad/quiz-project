import React from 'react';
import './blog.css'
const Blog = () => {
 return (
  <div >
<h1>Progrmming Blog</h1>
<div className='blog'>
<h2>What is purpose of react work?</h2>
<p>Easy creation of dynamic applications: React makes it easier to create dynamic web applications because it requires less coding and offers more functionality, as opposed to JavaScript, where coding often gets complex very quickly. Improved performance: React uses Virtual DOM, thereby creating web applications faster</p>
<h2>How does context api work?</h2>
<p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
<h2>What is useRef in react work? </h2>
<p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  {/* </div><div ref={myRef} />  */}, React will set its .current property to the corresponding DOM node whenever that node changes.</p>

</div>
  </div>
 );
};

export default Blog;
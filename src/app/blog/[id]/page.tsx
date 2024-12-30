"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
const blogs = [
  {
    id: 1,
    image: "/images/ts.png",
    title: "TypeScript: A Comprehensive Overview",
    description:
      "React is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. It enables developers to create reusable UI components, making the development process more efficient and manageable. One of the key concepts in React is the component. Components are the building blocks of a React application. Each component is a self-contained module that encapsulates its structure, style, and behavior. Components can be nested, managed, and handled independently. This modular approach allows developers to build complex applications from simple components. React uses a virtual DOM to enhance performance. The virtual DOM is a lightweight copy of the actual DOM. When the state of a component changes, React updates the virtual DOM first. It then compares the virtual DOM with the actual DOM and updates only the parts of the actual DOM that have changed. This process, known as reconciliation, makes React very efficient in updating the UI. Another essential feature of React is the use of JSX, a syntax extension that allows HTML to be written within JavaScript code. JSX makes the code more readable and easier to write. It also allows developers to leverage the full power of JavaScript within their HTML. React's component lifecycle methods provide hooks into various stages of a component's existence, such as when it is created, updated, or destroyed. These methods enable developers to execute code at specific points in the component's lifecycle. In addition to these features, React's ecosystem is vast, with many libraries and tools available to enhance and complement React applications. Some popular libraries include Redux for state management, React Router for routing, and Axios for making HTTP requests. Understanding React is essential for modern web development. Its component-based architecture, virtual DOM, and powerful ecosystem make it a go-to choice for building dynamic and efficient user interfaces. ",
  },
  {
    id: 2,
    image: "/images/next.jpg",
    title: "Next.js: A React Framework for Building Blogs",
    description:
      "Next.js is a popular React framework that enables server-side rendering and static site generation, making it a powerful tool for building modern web applications. Developed by Vercel, Next.js provides an intuitive developer experience and out-of-the-box support for many essential features. One of the main advantages of Next.js is its ability to pre-render pages. This means that Next.js generates HTML for each page in advance, either at build time (static generation) or on each request (server-side rendering). This approach improves the performance and SEO of web applications, as search engines can easily index pre-rendered pages. Next.js follows a file-based routing system, where each file in the pages directory corresponds to a route in the application. This makes it easy to create new routes and understand the structure of the application. Dynamic routes can be created using square brackets in the file name, allowing developers to handle dynamic content seamlessly. Another key feature of Next.js is its API routes. These are special files in the pages/api directory that define serverless functions. API routes enable developers to create backend endpoints without needing to set up a separate server. This feature is particularly useful for building full-stack applications with a single codebase. Next.js also provides built-in support for CSS and Sass, allowing developers to style their applications easily. Additionally, Next.js supports various CSS-in-JS libraries, such as styled-components and emotion, for those who prefer to keep their styles scoped to components. For state management, Next.js works seamlessly with popular libraries like Redux, MobX, and the Context API. This flexibility allows developers to choose the best state management solution for their specific needs. Deploying a Next.js application is straightforward with Vercel, the platform built by the creators of Next.js. Vercel offers a seamless deployment experience, with features like automatic static optimization, instant cache invalidation, and global CDN support. In summary, Next.js is a robust framework for building modern web applications with React. Its support for server-side rendering, static site generation, API routes, and seamless deployment make it an excellent choice for developers looking to create high-performance, scalable applications. ",
  },
  {
    id: 3,
    image: "/images/React.png",
    title: "React: A JavaScript Library for Building User Interfaces",
    description:
      "React is a popular JavaScript library for building user interfaces, developed and maintained by Facebook. It enables developers to create reusable UI components, making the development process more efficient and manageable. One of the key concepts in React is the component. Components are the building blocks of a React application. Each component is a self-contained module that encapsulates its structure, style, and behavior. Components can be nested, managed, and handled independently. This modular approach allows developers to build complex applications from simple components. React uses a virtual DOM to enhance performance. The virtual DOM is a lightweight copy of the actual DOM. When the state of a component changes, React updates the virtual DOM first. It then compares the virtual DOM with the actual DOM and updates only the parts of the actual DOM that have changed. This process, known as reconciliation, makes React very efficient in updating the UI. Another essential feature of React is the use of JSX, a syntax extension that allows HTML to be written within JavaScript code. JSX makes the code more readable and easier to write. It also allows developers to leverage the full power of JavaScript within their HTML. React's component lifecycle methods provide hooks into various stages of a component's existence, such as when it is created, updated, or destroyed. These methods enable developers to execute code at specific points in the component's lifecycle. In addition to these features, React's ecosystem is vast, with many libraries and tools available to enhance and complement React applications. Some popular libraries include Redux for state management, React Router for routing, and Axios for making HTTP requests. Understanding React is essential for modern web development. Its component-based architecture, virtual DOM, and powerful ecosystem make it a go-to choice for building dynamic and efficient user interfaces.",
  },
  {
    id: 4,

    image: "/images/graphql.png",
    title: "GraphQL: A Query Language for APIs",
    description:
      "GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. It provides a more flexible and efficient alternative to traditional REST APIs, allowing clients to request exactly the data they need. One of the main advantages of GraphQL is its ability to reduce over-fetching and under-fetching of data. With REST APIs, clients often receive more data than they need or have to make multiple requests to get the required data. GraphQL solves this problem by allowing clients to specify the structure of the response, ensuring that they receive only the necessary data in a single request. GraphQL schemas define the types and relationships between data in the API. A schema consists of type definitions that describe the shape of the data and the operations that can be performed on it. This allows clients to understand the available data and query it in a consistent manner. Queries in GraphQL are written using a simple and intuitive syntax. Clients can specify the fields they need and nest related fields to retrieve complex data structures in a single query. This eliminates the need for multiple endpoints and reduces the complexity of the client-side code. Mutations in GraphQL are used to modify data. They allow clients to perform create, update, and delete operations while specifying the structure of the response. This ensures that clients receive immediate feedback about the changes made to the data. GraphQL also supports real-time updates through subscriptions. Subscriptions allow clients to receive updates whenever the data changes, enabling real-time applications and improving the user experience. In addition to its flexibility and efficiency, GraphQL provides strong typing and introspection capabilities. This allows developers to validate queries at compile time and provides powerful tools for exploring and understanding the API. Many popular frameworks and libraries, such as Apollo and Relay, provide tools and integrations for building GraphQL APIs and clients. These tools simplify the development process and help developers implement best practices. In summary, GraphQL is a powerful and flexible query language for APIs that provides a more efficient and consistent way to request and manipulate data. Its ability to reduce over-fetching and under-fetching, along with its strong typing and real-time capabilities, make it an excellent choice for modern web development.",
  },
  {
    id: 5,
    image: "/images/tailwind.png",
    title: "Tailwind CSS: A Utility-First CSS Framework",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides a wide range of built-in classes and utilities for building responsive and accessible websites.",
  },
  {
    id: 6,
    image: "/images/js.webp",
    title: "JavaScript: A Programming Language",
    description:
      "ES6, or ECMAScript 2015, introduced many significant improvements to JavaScript, making it more powerful and easier to work with. Some of the most notable features include arrow functions, template literals, destructuring assignment, and enhanced object properties. Arrow functions provide a concise syntax for writing function expressions. They are particularly useful for short functions and do not have their own `this` context, making them a great choice for callbacks and methods that do not require a specific `this` context. Template literals allow developers to embed expressions within string literals using backticks (``) instead of single or double quotes. This makes it easier to create multi-line strings and perform string interpolation, which can greatly improve the readability of the code. Destructuring assignment is a convenient way to extract values from arrays or properties from objects into distinct variables. This feature reduces the amount of code needed to access individual elements and properties, making the code more concise and readable. Enhanced object properties simplify the process of defining objects. With ES6, developers can use shorthand property names when the property name matches the variable name, and they can define methods without the `function` keyword. This results in cleaner and more readable object definitions. ES6 also introduced the `let` and `const` keywords for variable declarations. `let` is used for variables that may change, while 'const' is used for constants that should not be reassigned. Both keywords provide block scope, which is a significant improvement over the function scope of `var`. Other notable ES6 features include classes, modules, and promises. Classes provide a cleaner syntax for creating constructor functions and managing prototypes. Modules allow developers to organize their code into separate files and import/export functionality as needed. Promises offer a more manageable way to handle asynchronous operations, replacing the need for complex callback chains. In summary, ES6 brought many important enhancements to JavaScript, making it more powerful, flexible, and easier to work with. By leveraging these features, developers can write cleaner, more efficient, and more maintainable code.",
  },
  {
    id: 7,
    image: "/images/node.jpg",
    title: "Node.js: A Runtime Environment for JavaScript",
    description:
      "Node.js is a powerful and efficient runtime environment that allows developers to build fast and scalable server-side applications using JavaScript. Built on Chrome's V8 JavaScript engine, Node.js provides a non-blocking, event-driven architecture, making it ideal for handling multiple concurrent connections and real-time applications like chat apps, gaming, and streaming services. Its lightweight and efficient design enables developers to create robust back-end solutions with high performance. Node.js boasts a rich ecosystem through npm (Node Package Manager), offering thousands of open-source libraries and modules that simplify development and enhance functionality. Its versatility allows it to be used for various use cases, including RESTful APIs, microservices, and even desktop applications when paired with frameworks like Electron. Node.js’s cross-platform compatibility, vibrant community, and continuous updates make it a preferred choice for developers seeking to build modern, scalable applications.",
  },

  {
    id: 8,
    image: "/images/mdb.jpg",
    title: " MongoDB NoSQL Database",
    description:
      "MongoDB is a powerful NoSQL database renowned for its ability to handle unstructured and semi-structured data with ease. Its document-oriented design allows developers to store data in a flexible, JSON-like format, making it ideal for applications with evolving schemas. MongoDB’s horizontal scalability ensures it can handle massive amounts of data across distributed systems, while its high availability and automatic failover provide robust performance and reliability. Additionally, MongoDB supports powerful querying, indexing, and aggregation features, enabling efficient data manipulation and retrieval. Its versatility has made it a popular choice for modern applications, including web, mobile, and real-time analytics, across industries ranging from e-commerce to healthcare. With an active ecosystem of tools and integrations, MongoDB empowers developers to build scalable and high-performing applications with ease",
  },
  {
    id: 9,
    image: "/images/redux.png",
    title: "Redux: A Predictable State Management Library",
    description:
      "Web performance optimization (WPO) is the practice of improving the speed and efficiency of web pages to provide a better user experience. A faster website leads to higher user engagement, better search engine rankings, and increased conversion rates. One of the key aspects of WPO is reducing the amount of data that needs to be transferred between the server and the client. This can be achieved by compressing images, minifying CSS and JavaScript files, and leveraging browser caching. These techniques help reduce the size of the files that need to be downloaded, leading to faster page load times. Another important aspect of WPO is optimizing the critical rendering path. The critical rendering path refers to the sequence of steps that the browser takes to render a web page. By optimizing this path, developers can ensure that the most important content is displayed as quickly as possible. Techniques such as deferring non-critical JavaScript, prioritizing visible content, and using lazy loading for images can help achieve this. Server-side optimizations are also crucial for web performance. This includes using a content delivery network (CDN) to serve static assets, optimizing database queries, and reducing server response times. These optimizations help ensure that the server can handle a large number of requests efficiently and deliver content quickly to users. Web performance can also be improved by reducing the number of HTTP requests made by the browser. This can be achieved by combining multiple CSS and JavaScript files into a single file, using CSS sprites for images, and reducing the number of external resources loaded by the page. Tools such as Google PageSpeed Insights, Lighthouse, and WebPageTest can be used to analyze web performance and identify areas for improvement. These tools provide detailed reports and recommendations for optimizing web pages, making it easier for developers to implement best practices. In addition to technical optimizations, WPO also involves optimizing the user experience. This includes ensuring that the website is responsive, providing a smooth and fast navigation experience, and optimizing the time to interactive (TTI) metric. A well-optimized website not only loads quickly but also feels fast and responsive to users. In summary, web performance optimization is essential for providing a fast and efficient user experience. By reducing data transfer, optimizing the critical rendering path, implementing server-side optimizations, and reducing HTTP requests, developers can create websites that load quickly and perform well under different conditions. ",
  },
];

const Blog = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    const storeComments = localStorage.getItem(`comments-${id}`);
    if (storeComments) {
      setComments(JSON.parse(storeComments));
    }
  }, [id]);

  const handleComment = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, newComment.trim()];
      setComments(updatedComments);
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
      setNewComment("");
    }
  };
  if (!blog) {
    return <div>No blog found</div>;
  }
  return (
    <div className="container max-w-6xl mx-auto ">
      <div className="mt-10 mx-5 ">
        <Image
          className="w-full h-full object-cover rounded-lg "
          src={blog.image}
          alt={blog.title}
          width={800}
          height={600}
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-10">
          {blog.title}
        </h1>
        <p className="text-gray-600 mt-10 text-justify mx-auto">
          {blog.description}
        </p>
      </div>
      <div className="mt-5 mx-5">
        <h2 className="text-3xl font-semibold mt-10 text-center lg:text-left">
          Comments Here
        </h2>
        <form onSubmit={handleComment} className="mt-5 space-y-3">
          <textarea
            placeholder="your message"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            rows={4}
            className="w-full h-32 px-4 py-2 border rounded-lg"
          />
          <button className="px-10 py-4 text-white bg-secondary rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </form>
        <div className="mt-6 space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 border-gray-200 p-4 rounded-lg"
              >
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p className="mb-10 font-serif">No comments yet</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Blog;

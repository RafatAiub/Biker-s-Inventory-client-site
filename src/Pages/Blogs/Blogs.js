import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs' className='fs-5'>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3>Difference between javascript and nodejs</h3>
                <p>JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.

                    In this article, we are going to discuss the difference between JavaScript and Node.js. But before discussing the differences, we will know about JavaScript and Node.js.</p>
            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3>When should you use nodejs and when should you use mongodb</h3>
                <p>

                    Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.

                    MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.

                    MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...

                    These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.
                </p>
            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3>Differences between sql and nosql databases.</h3>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

            </div>
            <div className='shadow-lg p-5 rounded m-2'>
                <h3>What is the purpose of jwt and how does it work</h3>
                <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize users in a microservice architecture.

                    JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn’t have to completely rely on a data store (or) database to save session information.

                    JWTs can be encrypted, but they are typically encoded and signed.  We will be focusing on Signed JWTs. The purpose of Signed JWT is not to hide the data but to ensure the authenticity of the data. And that is why it’s highly recommended to use HTTPS with Signed JWTs.</p>

            </div>
        </div>
    );
};

export default Blogs;
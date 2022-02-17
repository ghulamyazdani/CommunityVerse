---
title: "How to create Search bar in next js using tailwind css"
date: "Feb 10,2022"
excerpt: "Next.js and tailwind css have became a popular tech stacks for developer for creating some awesome web applications,Thus the need for search bar and other things increases this is the tutorial for that."
tag: "Nextjs, Tailwindcss, Searchbar"
cover_image: "/images/Search.png"
author: "ghulamyazdani"
---

Having a Searchbar in any website is one of the most important features any Developer can add , so this is the tutorial for that.

First you would need a project in which you are trying to add searchbar in my case its my blogging website in which an api endpoint is giving all the bunch of required meta data and content of blogs.

starting from the step 1.
you will need to create a new component searchbar.tsx.In which you will need to create some html tags which will be use for searchbar

```
<form action="">
            <input
              type="text"
              placeholder="Search blogs"
              className="text-black rounded-lg w-full p-2 focus:outline-none focus:shadow-outline"
            />
</form>
```

Now you will have to use Usestate hook to store input values in it and then we will have to search that particular input in the array of data which we are getting from api.

`const [value, setValue] = useState("something");`

to Update the value on change of input we will use the onChange event.

```
onChange={(e) => {
              e.target.value ? setValue(e.target.value) : setValue("something");
            }}
```

Now comes the main part of whole thing . we will be searching the value in our whole data and showing the result beneath the searchbar.we will use map function for traversing and searching the value.

```
<div className="results overflow-hidden mt-1 z-10 bg-white rounded-lg">
  {posts.map((post: any, index: number) => {
    if (post.frontmatter.title
         .toLowerCase()
         .includes(value.toLowerCase())) {
            return (
            <Link href={`/blog/` + post.slug} passHref>
            <div key={index}
                      className="relative p-4 border-2 text-gray-50 cursor-pointer hover:bg-slate-200 "
                    >
                      <option
                        value=""
                        className="relative text-justify  truncate text-black "
                      >
                        {post.frontmatter.title}
                      </option>
                    </div>
                  </Link>
                );
              } else if (
                post.frontmatter.author
                  .toLowerCase()
                  .includes(value.toLowerCase())
              ) {
                return (
                  <div className="text-black">{post.frontmatter.author}</div>
               );}
   })}
</div>

```

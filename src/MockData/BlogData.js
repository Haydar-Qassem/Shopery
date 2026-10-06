import blogimage from "../assets/images/Blogs/BlogImage1.png";
import post1img1 from "../assets/images/BlogPosts/post1-img1.png";
import post1img2 from "../assets/images/BlogPosts/post1-img2.png";

export const mockBlogData = [
  {
    id: 1,
    image: blogimage,
    date: { day: "18", month: "Nov", year: "2023" },
    category: "Food",
    author: "Admin",
    estimatedTimeToRead: "5 min read",
    comments: 65,
    commentsData: [
      {
        id: 1,
        name: "John Doe",
        profileImage: null,
        time: "2 hours ago",
        text: "This is a great post!",
      },
      {
        id: 2,
        name: "John Doe",
        profileImage: null,
        time: "2 hours ago",
        text: "This is a great post!",
      },
      {
        id: 3,
        name: "John Doe",
        profileImage: null,
        time: "2 hours ago",
        text: "This is a great post!",
      },
    ],
    title:
      "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.",
    link: "/blog/curabitur-porttitor",
    contentBlocks: [
      {
        type: "heading",
        content:
          "Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.",
      },
      {
        type: "paragraph",
        content:
          "Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.",
      },
      {
        type: "paragraph",
        content:
          "Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.",
      },
      {
        type: "image-grid",
        images: [post1img1, post1img2],
      },
      {
        type: "paragraph",
        content:
          "Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.",
      },
    ],
  },
  {
    id: 2,
    image: blogimage,
    date: { day: "29", month: "Jan", year: "2026" },
    category: "Food",
    author: "Admin",
    estimatedTimeToRead: "5 min read",
    comments: 65,
    title: "Eget lobortis lorem lacinia. Vivamus pharetra semper,",
    link: "/blog/curabitur-porttitor",
    contentBlocks: [
      {
        type: "heading",
        content:
          "Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.",
      },
      {
        type: "paragraph",
        content:
          "Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.",
      },
      {
        type: "paragraph",
        content:
          "Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.",
      },
      {
        type: "image-grid",
        images: [post1img1, post1img2],
      },
      {
        type: "paragraph",
        content:
          "Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.",
      },
    ],
  },
  {
    id: 3,
    image: blogimage,
    date: { day: "21", month: "Feb", year: "2026" },
    category: "Food",
    author: "Admin",
    estimatedTimeToRead: "5 min read",
    comments: 65,
    title: "Maecenas blandit risus elementum mauris malesuada.",
    link: "/blog/curabitur-porttitor",
    contentBlocks: [
      {
        type: "heading",
        content:
          "Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.",
      },
      {
        type: "paragraph",
        content:
          "Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.",
      },
      {
        type: "paragraph",
        content:
          "Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.",
      },
      {
        type: "image-grid",
        images: [post1img1, post1img2],
      },
      {
        type: "paragraph",
        content:
          "Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.",
      },
    ],
  },
  {
    id: 4,
    image: blogimage,
    date: { day: "21", month: "Feb", year: "2025" },
    category: "Food",
    author: "Admin",
    estimatedTimeToRead: "5 min read",
    comments: 65,
    title: "Maecenas blandit risus elementum mauris malesuada.",
    link: "/blog/curabitur-porttitor",
    contentBlocks: [
      {
        type: "heading",
        content:
          "Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.",
      },
      {
        type: "paragraph",
        content:
          "Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.",
      },
      {
        type: "paragraph",
        content:
          "Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.",
      },
      {
        type: "image-grid",
        images: [post1img1, post1img2],
      },
      {
        type: "paragraph",
        content:
          "Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.",
      },
    ],
  },
];

const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              name: "index.html",
              isFolder: false
            },
            {
              name: "hello.html",
              isFolder: false
            }
          ]
        },
        {
          name: "public_nested_file",
          isFolder: false
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name:"components",
          isFolder: true,
          items:[
            {
              name:"home.js",
              isFolder: "false",
            },
          ],
        },
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "index.js",
          isFolder: false
        }
      ]
    }
  ]
};

export default explorer;

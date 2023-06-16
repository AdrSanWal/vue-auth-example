# vue-auth-example

This is a project to practice vue authentication.

For this I have used the api hosted at https://dummyjson.com/
Therefore, the operations carried out do not have persistence.

https://github.com/AdrSanWal/vue-auth-example/assets/82061736/6a6ee754-7119-4980-9dfd-8a1526468612

I'm not a professional programmer and everything here has been done from scratch and researched on my own, so if you see something that could be improved, let me know. All constructive criticism is welcome.

Start locally (requires Node):
=

1º Clone the repository to a folder:

    git clone https://github.com/AdrSanWal/vue-auth-example.git

2º Instal Node:

    cd vue-auth-example/auth-example
    
    npm install

3º Run server:

    npm run serve
  
4º Access page:

    localhost:8080
    

Start with Docker (requires Docker):
=

1º Get the image from docker hub:

    docker pull adrsanwal/vue-auth-example:1.0.0
    
2ª Run the container:

    docker run -d -p 8080:8080 adrsanwal/vue-auth-example:1.0.0
    
3º Access page:

    localhost:8080
    
Observations:
=

I have put aside the aesthetic part to focus on functionality.

Since you cannot modify the records in the API, you cannot create users, but you can use the ones that are already included.

Some examples to login:

  "username": "atuny0",
  "password": "9uQFF1Lh"
  
   "username": "kmeus4",
  "password": "aUTdmmmbH"
  
  "username": "lgribbinc",
  "password": "ftGj8LZTtv9g"

# eCommerce (BACK_END)

![Using Insomnia to test our requests to the database!](<./Assets/Screenshot%20(12).png>)

## Description

Why did you decide to build this project?

```
This project is an exercise on C.R.U.D.; create, read, update, and delete requests! I wanted to create a mock up of how these CRUD requests work, so that people can reference them later when they're working on their own projects. With Insomnia, playing around with these requests is a snap!
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

How to install:

```
In order to install this project, you will need to clone this this repo to your local machine (copy the SSH link to your clipboard, and then paste in the directory you would like in you terminal
Then, you will need to download the dependencies; express, dotenv, sequelize, and mysql2. To do this, simply type "npm i" into you terminal at the main folder of this repo.

It is very important to have mysql installed; it will not work if you dont!
```

## Usage

How does your project work?

```
This program works best in Insomnia, an application used for testing CRUD requests in your server!

In insomnia, users will be able to try out different CRUD methods, and see their results dynamically change on the same page. The mthods will allw you to add, remove, view, and edit data located with you actual computer database!
```

## Contributing

How can you contribute to this project?

```
If you would like to contribute< please feel free to mess around with the source code and fill me in on any unecessary/overly-complicated code. I would love feedback!
```

## Tests

This is a Junction Table; it will allow Products to interact with Tags in a "Many-to-Many" relationship!

```
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
```

![The code written for the program; a behind-the-scenes!](<./Assets/Screenshot%20(9).png>)

Here is the [video demonstration](https://www.youtube.com/watch?v=thd5HxLe6YY)!

## Questions

If you have any questions, you can contact me through:

- [Github](https://github.com/Loggamon)
- Email: scarletfedora@gmail.com

## License & Copyright

© Logan Monson

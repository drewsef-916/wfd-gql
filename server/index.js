const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const axios = require('axios')
const cors = require('cors')

require('dotenv').config()


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    recipe(id: String!): Recipe
    recipes: [Recipe]
  },
  type Recipe {
    id: String
    name: String
    ingredients: [String]
    directions: [String]
  },
  type Mutation {
    createRecipe(id: String, name: String, ingredients: [String], directions: [String]): Recipe
    deleteRecipe(id: String!): Recipe
  }
`)


const getRecipe = async ({ id }) => {
  const { data } = await axios.get(`https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`)
  return data.find(recipe => recipe.id === id)
}

const getRecipes = async () => {
  const { data } = await axios.get(`https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`)
  return data
}

const createRecipe = async ({ ...recipeArgs }) => {
  const { data } = await axios.post(`https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`)
}

const deleteRecipe = async ({ id }) => {
  const { data } = await axios.get(`https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`)
  const recipe = data.filter(recipe => recipe.id === id).pop()
  const mongoID = recipe._id.$oid
  console.log(mongoID)
  await axios.delete(`https://api.mlab.com/api/1/databases/wfddev/collections/recipes/${mongoID}?apiKey=${process.env.MLAB_SECRET}`)
  console.log('Deleted!')
}

// The root provides a resolver function for each API endpoint
const root = {
  recipe: getRecipe,
  recipes: getRecipes,
  createRecipe: createRecipe,
  deleteRecipe: deleteRecipe
};

const app = express();

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => console.log(`GQL server at localhost:4000/graphql`))



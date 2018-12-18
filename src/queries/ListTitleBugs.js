import gql from 'graphql-tag'
  export default gql`
    query ListTitleBugs($error:String){
        listBugs(filter: {error:{
        contains: $error
    }}) 
      {
        items {
          error
          code
          username
        }
    }
  }
  `
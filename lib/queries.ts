import { gql } from "@apollo/client";

export const FETCH_ALL_ARTICLES_SLUG = gql`
  query articles($filters: ArticleFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []){
    articles (filters: $filters, pagination: $pagination, sort: $sort){
      data {
        id
        attributes {
          slug
        }
      }
    }
}
`

export const FETCH_ARTICLES = gql`
query articles($filters: ArticleFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
    articles (filters: $filters, pagination: $pagination, sort: $sort) {
      data {
        id
        attributes {
          title
          description
          content
          slug
          coverImage {
            data {
              id
              attributes {
                url
                previewUrl
              }
            }
          }
          keywords
          metaTitle
          metaDescription
          categories {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
          isTrending
          isTopVisited
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
  
`

export const FETCH_ALL_CATEGORIES = gql`
  query {
    categories {
      data {
        id
        attributes {
          name
          slug
          blogOrders
        }
      }
    }
  }
`

export const CREATE_CONTACT = gql`
mutation createContactUs(
  $name:String
  $email:String
  $message:String
  $subject:String
){
  createContactUs(
    data:{
      Name:$name
      Email:$email
      Message:$message
      Subject:$subject
    }
  ){
    data{
      id
      attributes{
        Name
        Email
        Message
        Subject
      }
    }
  }
}
`
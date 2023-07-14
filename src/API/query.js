import { gql } from '@apollo/client';
export const GET_ARTICLES_INTRO = gql`
  query GetArticlesIntro {
    articlesCollection(where: { order_in: [1, 2, 3, 4] }) {
      items {
        title
        coverImage {
          url
        }
        order
        author
        tags
        sys {
          id
        }
        summary
      }
    }
  }
`;

export const GET_ARTICLES = gql`
  query GetArticlesIntro {
    articlesCollection {
      items {
        title
        coverImage {
          url
        }
        order
        author
        tags
        sys {
          id
        }
        summary
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle($id: String!) {
    articles(id: $id) {
      title
      content {
        json
      }
      coverImage {
        url
      }
      publishedDate
      tags
      author
    }
  }
`;

export const GET_PROJECTS = gql`
  query GetProjects {
    projectsCollection {
      items {
        title
        projectImage {
          url
        }
        summary
        sys {
          id
        }
        order
        projectLink
      }
    }
  }
`;

export const GET_PROJECTS_INTRO = gql`
  query GetProjects {
    projectsCollection(where: { order_in: [1, 2, 3] }) {
      items {
        title
        projectImage {
          url
        }
        summary
        sys {
          id
        }
        order
        projectLink
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query GetProject($id: String!) {
    projects(id: $id) {
      title
      description {
        json
      }
      projectImage {
        url
      }
    }
  }
`;

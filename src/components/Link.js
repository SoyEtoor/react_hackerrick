import React from 'react';
import { AUTH_TOKEN } from '../constants';
import { useMutation, gql } from '@apollo/client';

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: Int!) {
    createVote(linkId: $linkId) {
      user {
        id
        username
      }  
       link {
         id
         url
       }
    }
  }
`;

const Link = (props) => {
  const { link } = props;
  const authToken = localStorage.getItem(AUTH_TOKEN);

  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: link.id
    }
  });

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{props.index + 1}.</span>
        {authToken && (
          <div
            className="ml1 gray f11"
            style={{ cursor: 'pointer' }}
            onClick={() => vote()} // Corrección aquí
          >
            Me Gusta 👍
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.name}<br></br>{link.status} 
          <br></br>
          <img src={link.url} alt="Link Image" />
        </div>
        {(
          <div className="f6 lh-copy gray">
            {link.votes.length} Votos | Por{' '}
            {link.postedBy ? link.postedBy.username : 'Unknown'}{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default Link;

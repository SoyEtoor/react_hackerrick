import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $url: String!
    $name: String!
    $status: String!
  ) {
    createLink(url: $url, name: $name, status: $status) {
      id
      url
      name
      status
    }
  }
`;

const CreateLink = () => {
  const navigate = useNavigate();
  
  const [formState, setFormState] = useState({
    url: '',
    name: '',
    status: ''
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      url: formState.url,
      name: formState.name,
      status:formState.status
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">

        <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value
              })
            }
            type="text"
            placeholder="La URL de la imagen"
          />

          <input
            className="mb2"
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Nombre del personaje"
          />
          
          <input
            className="mb2"
            value={formState.status}
            onChange={(e) =>
              setFormState({
                ...formState,
                status: e.target.value
              })
            }
            type="text"
            placeholder="Estatus del personaje"
          />

        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default CreateLink;
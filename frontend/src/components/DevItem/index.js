import React from 'react';

import './styles.css';

function DevItem({ dev }) {
    return (
        <li key={dev._id} className="dev-item">
            <header>
              <img src={dev.avatarUrl} alt={dev.name}></img>
              <div className="user-info"></div>
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(',')}</span>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.githubUser}`}>Acessar perfil no GitHub</a>
          </li>
    )
}

export default DevItem;
import React, { useState, useEffect } from 'react';

import './style.css';

import { Card, CardProps } from '../../components/Card';



type User = {
  name: string;
  avatar:string;
}

export function Home() {
  // useState >> é um ruk que consegue armazena estado dentro dele, um determinado conteúdo dentro desse estado e conectar com a interface, e iniciar um novo ciclo quando esse conteúdo muda
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    // pega o conteúdo anterior mais o novo estudande  >>prevState =>[...prevState, newStudent
    // zu spret operation ...prevState deixa todo objeto dentro de um vetor
    setStudents(prevState => [...prevState, newStudent]);

  }

  //useEffect é executado automâticamente quando a interface e renderizada.
  useEffect(() => {
    // corpo do useEffect
    fetch('https://api.github.com/users/limaeliton')
        .then(response => response.json()) 
        .then(data => {
          setUser({
            name: data.name,
            avatar:data.avatar_url,
          })
        })
    
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="foto de perfil" />
        </div>

      </header>


      <input
        type="text"
        placeholder="Digite o nome..."
        //toda vez que o conteúdo do input muda entrega um evento
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => (
          <Card
            // key chave única para cada componente é necessário
            key={student.time}
            name={student.name}
            time={student.time}

          />))


      }


    </div>
  )
}



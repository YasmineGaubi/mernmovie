import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input,Container } from 'reactstrap';


export default function MovieAdd() {
    //declaration des state mta les input 
const [title, settitle] = useState();
const [year, setyear] = useState()
const [poster, setposter] = useState()
const [id_type, setid_type] = useState()
const [types, settypes] = useState([])

useEffect(() => {
    getTypes.then(data=>{
        console.log(data);
    })

   
}, [])

const getTypes = async ()=> {

         Axios.get(`http://localhost:3100/type/all`)
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    };

   

    const handleSubmit=()=> {
        Axios.post('http://localhost:3100/movie/add',{
            title,
            year,
            poster,
            id_type
        })
        .then((response) => {

        console.log("dataa",response);

      }) .catch(() => {
        alert('FAMA ERREUR')
      });
    }
    return (
        <Container style={{    width: '22vw'}}>
            <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Title</Label>
        <Input  type="text" name="title" onChange={(e)=> settitle(e.target.value)} placeholder="Title..." />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Movie Year</Label>
        <Input  type="number" name="year" onChange={(e)=> setyear(e.target.value) } placeholder="Year..." />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Photo Poster</Label>
        <Input type="text" name="poster" onChange={(e)=> setposter(e.target.value) } placeholder="Poster Photo" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Type</Label>
        <Input type="select" name="id_type" onChange={(e)=> setid_type(e.target.value) } placeholder="TYPE" >
         {types.map(element=>{
             <option>HELLO</option>
         })}
        </Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
        </Container>
    )
}

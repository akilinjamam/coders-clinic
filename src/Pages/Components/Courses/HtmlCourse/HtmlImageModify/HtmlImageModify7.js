import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
const HtmlImageModify7 = () => {
    const { id } = useParams()
    // import {useParams} from 'react-router-dom'
    const [dataaStyle, setDataaStyle] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/htmlImage';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setDataaStyle(data))
    }, [dataaStyle])



    const handleModify = event => {
        event.preventDefault()
        console.log(id)
        const description1 = event.target.description1.value

        const updateImageData7 = {
            description1: description1,
        }

        // sending data to server
        const url = `http://localhost:5000/htmlImage/description1/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateImageData7)
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log('success', data)
                alert('sent successfully');
                event.target.reset()
            })
    }

    return (
        <div>
            <form onSubmit={handleModify} action="">
                <div className='p-5'>
                    <p className='text-2xl font-bold text-green-500 text-center'>Modify  Html Image</p>

                    {dataaStyle && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}
                    <br />
                    <div className='bg-gray-300 p-5 rounded'>
                        {dataaStyle && <label className="label">
                            <span className="label-text font-bold">Description:</span>
                        </label>}
                        <p> {dataaStyle.map(d => d.description1)} </p>
                        <br />
                        {dataaStyle && <div className=' flex'>
                            <textarea required type="text" name='description1' className="input input-bordered input-primary w-full " />

                            <input className='btn btn-primary ml-10  text-white   ' type="submit" value="update" />

                        </div>}
                    </div>
                </div>
            </form>

        </div>
    );
};

export default HtmlImageModify7;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const AttributeModify2 = () => {

    const { id } = useParams();
    const [dataaAtt, setDataaAtt] = useState([])

    const data = dataaAtt.find(f => f._id === id)



    useEffect(() => {
        const url = 'http://localhost:5000/htmlAtt';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setDataaAtt(data))
    }, [dataaAtt])


    const handleModify = event => {
        event.preventDefault()
        console.log(id)
        const title = event.target.title.value
        const updateHtmlData2 = {
            title: title,
        }
        // sending data to server
        const url = `http://localhost:5000/htmlAtt/title/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateHtmlData2)
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
                    <p className='text-2xl font-bold text-green-500 text-center'>Modify  Attributes</p>

                    {dataaAtt && <p className='font-bold mt-10 bg-gray-300 p-2 rounded'>1</p>}
                    <br />
                    <div className='bg-gray-300 p-5 rounded'>
                        {dataaAtt && <label className="label">
                            <span className="label-text font-bold"> Title:</span>
                        </label>}
                        <p> {data?.title} </p>
                        <br />
                        {dataaAtt && <div className=' flex'>
                            <input placeholder={data?.title} required type="text" name='title' className="input input-bordered input-primary w-full max-w-xs" />

                            <input className='btn btn-primary ml-10  text-white   ' type="submit" value="update" />

                        </div>}
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AttributeModify2;
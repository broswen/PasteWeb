import { TextField } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './GetPaste.css';
import Warning from './Warning';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const GetPaste = (props) => {

    const [data, setData] = useState('');
    const [error, setError] = useState();

    const { id } = useParams();
    const query = useQuery();
    const location = useLocation();

    useEffect(() => {
        console.log(query)
        const url = `https://id.execute-api.us-east-1.amazonaws.com/paste/${id}${query.get('pass') ? '?pass=' + query.get('pass') : ''}`;
        axios.get(url)
            .then(data => {
                setData(data.data.data);
                setError(null);
            })
            .catch(err => {
                setError(err.response.status)
            })
    }, []);


    return (
        <div className="GetPaste">
            {
                error ?
                    <Warning status={error} />
                    : null
            }
            <TextField variant="outlined" fullWidth multiline rows={10} value={data} />
            <TextField variant="outlined" fullWidth value={`${data ? window.location.href : ''}`} style={{ paddingTop: '1rem' }} />

        </div>
    );
}

export default GetPaste;

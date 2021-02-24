import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SubmitPaste.css';
import Warning from './Warning';

const SubmitPaste = (props) => {

    const [data, setData] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState();

    const history = useHistory();

    const handleSubmit = () => {
        const url = `https://id.execute-api.us-east-1.amazonaws.com/paste`;
        const body = { data, pass };
        console.log(body)
        axios.post(url, body)
            .then(data => {
                console.log(data.data.id);
                const redirect = `/${data.data.id}${pass ? '?pass=' + pass : ''}`;
                setData('');
                setPass('');
                history.push(redirect);
            })
            .catch(err => {
                setError(err.response.status)
            });
    }

    return (
        <div className="SubmitPaste">
            {
                error ?
                    <Warning status={error} />
                    : null
            }
            <TextField variant="outlined" fullWidth multiline rows={10} value={data} onChange={(e) => setData(e.target.value)} />
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                <TextField label="password" variant="outlined" value={pass} onChange={(e) => setPass(e.target.value)} />
                <Button variant="outlined" size="large" onClick={handleSubmit}>Paste</Button>
            </div>
        </div>
    );
}

export default SubmitPaste;
